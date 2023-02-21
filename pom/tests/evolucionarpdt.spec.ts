import { test, expect } from '@playwright/test';
import { loginDentalink } from '../pages/login-page';
import { EvolucionarPacientes } from '../pages/evolucionar-page';


test.only('Evolucionar Prestacion', async ({ browser }) => {



  const context  = await browser.newContext();
  const page =  await context.newPage();
  const LoginDentalink = new loginDentalink (page);
  const Evolucionar = new EvolucionarPacientes(page);
  const userName= "AlvaroPrecios"
  const pass = "1234"


  await LoginDentalink.goTo();
  await LoginDentalink.loginUser(userName,pass);
  await Evolucionar.seleccionarPdt();



  await test.step ("new tab", async () => {

    const tabEvolucionar = new EvolucionarPacientes (page);
    const newTab = await tabEvolucionar.agregarPrestacion();

    await newTab.newTab();
    await console.log(await page.title());


    await newTab.agregarPlantilla();
    await newTab.evolucionarPdt();

  })
 


  await console.log(await page.title());

  await expect(page.locator("a[href='/agendas/semanal']"),"La agenda no se ve ").toBeVisible();

  
  const [newPage] = await Promise.all([

      context.waitForEvent("page"),
  ])
  //  await newPage.waitForLoadState();
  //  await newPage.getByText('#537: Nuevo plan de tratamientosucursalSucursal 1profesional Alvaro QaPreciosesp').click();
  //  await newPage.waitForLoadState();
  //  await expect(newPage.url()).toContain("pacientes");

  //  await newPage.locator("//button[normalize-space()='Prestación']").click();

  //  await newPage.locator("//span[normalize-space()='Plantillas']").click();

  //  await expect(newPage.locator("//span[normalize-space()='Listado de categorías de plantillas']")).toBeVisible();

  //  await newPage.locator("//span[normalize-space()='Mis Plantillas']").click();
  //  await newPage.locator("//span[normalize-space()='Test1']").click();

  //  await newPage.locator("//button[normalize-space()='Agregar al plan de tratamiento']").click();
   //await newPage.locator("span[class='sc-hgHYgh ldyrQY'] i[class='fa fa-times']").click();
   //await newPage.getByText('L.BIOM - Micro Tornillo H IMF 2.0 10 mm').nth(0).click();

  //await expect(newPage.getByText("L.BIOM - Placa Anclaje Recta, 2 orif. Puente Largo")).toContain();


   // Evolucionar PDT


  //  await newPage.locator("body > div:nth-child(24) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)").click()
   
  //  await newPage.locator("(//div[@class='select-multi-producto'])[1]").click()


  //  await newPage.locator(".sc-bdVaJa.eplEIV").click()

  
   await newPage.locator("(//div[normalize-space()='50%'])[1]").click()
   await newPage.locator(".sc-bdVaJa.hWwkpd").click()
   await newPage.locator("body > div:nth-child(24) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)").click()
   await newPage.locator("div[class='sc-bwzfXH cNUyTH'] button:nth-child(1)").click()
   
  
  //Pagar prestacion 


  await newPage.locator("a[href='/pacientes/1042/recaudar']").click()
  await newPage.locator("(//i[@class='fa fa-fw fa-square-o'])[1]").click()
  await newPage.locator(".btn.btn-success.pagar-tratamientos").click()
  await newPage.locator("//input[@id='prestacion_876']").click()
  await newPage.locator("(//input[@id='ingresar'])[1]").click()
  await newPage.locator("//button[normalize-space()='Continuar']").click()
  

   
 // await page.locator(".sc-bdVaJa.gGALkZ").click()
  // => {
  //   page.locator(".sc-bdVaJa.gGALkZ").click()
  // }





  //const pdt = page.locator(".sc-bdVaJa.gGALkZ")


//     const newPage = await Promise.all([

//        context.waitForEvent("page"),
//        page.locator(".sc-bdVaJa.gGALkZ").click()

//  ])
  //return newTab

})

// test.only ("Prueba tabs", async ({browser}) => {
//   const context  = await browser.newContext();
//   const page =  await context.newPage();
//   await page.goto("https://productowner-95.qa.dentalink.cl/sessions/login");



//   await Promise.all([

//      page.waitForNavigation(),
//      page.locator(".sc-bdVaJa.gGALkZ").click()

//   ])})

  
 






