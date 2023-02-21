import { expect, Locator, Page, } from '@playwright/test';

export class EvolucionarPacientes {
    readonly page: Page
    readonly locator : Locator
    readonly btnPacientes 
    readonly paciente
    readonly tratPaciente
    readonly tratSucursal
    readonly btnPrestacion
    readonly btnPlantillas
    readonly btnMisPlantillas
    readonly btnLista
    readonly btnAgregarPlantilla
    readonly cerrarModal
    readonly evolPdt
    readonly bntMultiProducto
    readonly quees



constructor (page : Page) {
    this.page = page

    this.btnPacientes= page.locator("a[href='/clientes']");
    this.paciente=page.locator("div[id='paciente-row-1042'] div[class='td nombre']");
    this.tratPaciente=page.locator("div[class='td tratamientos detail-column'] a[target='_blank']");
    this.tratSucursal=page.locator("//body/div[@class='main']/div[@id='app']/div[@class='F2KFM7jg97kuaS2_27IM']/div[@class='sc-dnqmqq cRmUrU']/div/div[@class='gHV97Yq7O3grp8au9Mu4']/div[2]");
    this.btnPrestacion = page.locator("//button[normalize-space()='Prestación']");
    this.btnPlantillas = page.locator("//span[normalize-space()='Plantillas']");
    this.btnMisPlantillas =page.locator("//span[normalize-space()='Mis Plantillas']");
    this.btnLista = page.locator("//span[normalize-space()='Test1']");
    this.btnAgregarPlantilla = page.locator("//button[normalize-space()='Agregar al plan de tratamiento']");
    this.cerrarModal = page.locator("span[class='sc-hgHYgh ldyrQY'] i[class='fa fa-times']");


    //Elementos evolucionar PDT


    this.evolPdt = page.locator("body > div:nth-child(24) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)");
    this.bntMultiProducto = page.locator("(//div[@class='select-multi-producto'])[1]");
    this.quees = page.locator(".sc-bdVaJa.eplEIV");


}

async seleccionarPdt () {
    await this.btnPacientes.click();
    await this.paciente.click();
    await this.tratPaciente.click();
}

async agregarPrestacion() {
    const [newPage] = await Promise.all([

        this.page.waitForEvent("popup"),
    ])
    return new EvolucionarPacientes (newPage);

}

async newTab (){

    await this.tratSucursal.click();

}

async agregarPlantilla(){

    await this.btnPrestacion.click();
    await this.btnPlantillas.click();
    await this.btnMisPlantillas.click();
    await this.btnLista.click();
    await this.btnAgregarPlantilla.click();
    await this.cerrarModal.click();
}

async evolucionarPdt (){

    await this.evolPdt.click();
    await this.bntMultiProducto.click();
    await this.quees.click();



}



}