import { test, Locator, expect } from '@playwright/test';
import { loginDentalink} from '../pages/login-page';
import { crearCita } from '../pages/agendar-page';

//pages
let agendar: loginDentalink
let crear: crearCita



test('test', async ({ page }) => {
 const agendar = new loginDentalink(page);
 const crear = new crearCita (page);

 
  await agendar.goTo();
  await agendar.loginUser("AlvaroPrecios","1234");


  
  await crear.agendarCita();
  await crear.seleccionarProfesional();

  await expect (page.getByText(" Alvaro Prueba "),"ALvaro NO esta").toBeVisible();


}); 

