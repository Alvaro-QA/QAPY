// playwright-dev-page.ts
import { expect, Locator, Page, } from '@playwright/test';

export class loginDentalink {
  readonly page: Page;
  readonly user: Locator;
  readonly pass: Locator
  readonly gettingStartedHeader: Locator;
  readonly pomLink: Locator;
  readonly tocList: Locator;
  readonly loginBoton: Locator;
  //readonly goto 
  //readonly botonDiaria: Locator;


  constructor(page: Page) {
    this.page = page;
    this.user = page.getByPlaceholder('Escriba su usuario...');
    this.pass = page.getByPlaceholder('Escriba su clave...');
    this.loginBoton = page.locator("//input[@id='ingresar']");
    //this.botonDiaria = page.getByRole('link', { name: ' Diaria' })




  }

  async goTo ()  {
    await this.page.goto("https://productowner-95.qa.dentalink.cl/sessions/login")
 }

  async loginUser(user, pass) {

    await this.user.fill(user)
    await this.pass.fill(pass)
    await this.loginBoton.click()
    //await this.botonDiaria.click()

  }

}