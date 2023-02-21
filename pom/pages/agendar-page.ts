// playwright-dev-page.ts
import { expect, Locator, Page, } from '@playwright/test';

export class crearCita {
  readonly page: Page;
  readonly botonDiaria: Locator;
  readonly darCita : Locator;
  readonly gettingStartedHeader: Locator;
  readonly profesional: Locator;
  readonly elegirProfesional: Locator;
  readonly loginBoton: Locator;
  readonly motivo
  readonly horario
  readonly paciente
  readonly confirmar
  readonly modal : Locator;
  readonly continuar : Locator;
  readonly cerrar : Locator
  readonly semana : Locator
  readonly validar : Locator
  readonly pdt : Locator
  readonly pdt2 : Locator

  constructor(page: Page) {
    this.page = page;
    this.botonDiaria = page.getByRole('link', { name: ' Diaria' });
    this.darCita = page.getByRole('button', { name: 'Dar cita' });
    this.elegirProfesional = page.getByRole('combobox', { name: 'Seleccionar doctor' }).locator('b');
    this.profesional = page.getByRole('treeitem', { name: 'Dr(a). QaPrecios, Alvaro' });
    this.motivo = page.locator('#motivos-atencion-cita-modal').getByText('Omitir');
    this.horario = page.getByRole('link', { name: '08:00' }).nth(0);
    this.paciente =page.getByPlaceholder('Nombre, apellidos, y/o rut...');
    this.confirmar=page.getByRole('link', { name: '1042 Alvaro Prueba' });
    this.modal = page.locator('#modal-datos-faltantes-paciente').getByText('Omitir');
    this.continuar=page.getByRole('button', { name: 'Continuar' })
    this.cerrar = page.getByRole('button', { name: 'Cerrar' })
    this.semana= page.getByRole('link', { name: ' Semanal ' })
    this.validar = page.getByRole('link', { name: 'Dr(a). QaPrecios, Alvaro' })
    this.pdt= page.locator('#positioned_472 a').filter({ hasText: 'Alvaro Prueba' })
    
    this.pdt= page.getByText("(//p[@class='with-underline'][normalize-space()='Alvaro Prueba'])[2]")
    this.pdt2=page.getByRole('link', { name: 'Ir a plan de tratamiento' })


  


  }

  async agendarCita() {
    await this.botonDiaria.click()
    await this.darCita.click();
  }
  async seleccionarProfesional() {
    await this.elegirProfesional.click()
    await this.profesional.click()
    await this.motivo.click()
    await this.horario.click()
    await this.paciente.type("1042")
    await this.confirmar.click()
    await this.modal.click()
    await this.continuar.click()
    await this.cerrar.click()
    await this.semana.click()
    await this.validar.click()
    // await this.pdt.click()
    // await this.pdt2.click()







  }
}