import { expect, Locator, Page, } from '@playwright/test';

export class Prestacion {
  
  readonly page: Page;
  readonly botonDiaria: Locator;
  readonly pacientes : Locator
  readonly tratamiento : Locator
  readonly pop : Locator
  readonly popup : Locator
  readonly ir : Locator
  readonly tramiento : Locator
  readonly tab : Locator

  constructor(page: Page)  {


     this.page = page;
     this.pacientes = page.getByRole('link', { name: ' Pacientes' });
     this.tratamiento = page.locator('#paciente-row-1042').getByText('Prueba');
     this.ir = page.getByRole('link', { name: 'Ir a tratamientos ' });
     this.tramiento = page.getByRole('button', { name: ' Nuevo plan de tratamiento' });
     this.tab = page.locator("//body/div[@class='main']/div[@id='app']/div[@class='F2KFM7jg97kuaS2_27IM']/div[@class='sc-dnqmqq cRmUrU']/div/div[@class='gHV97Yq7O3grp8au9Mu4']/div[2]");

     }
     
     async agregarPrestacion () {

      await this.pacientes.click();
      await this.tratamiento.click();
      await this.ir.click();
     }

     async abrirTab () {
     const [newPage] = await Promise.all([
          this.page.waitForEvent("popup"),
          //this.tab.click()
           ]);
            return new Prestacion (newPage);

         }
      async tab0 () {
        await this.tab.click()

        }
    
    }

      
    
        


      






  
  


        
        
        



      


     
    

    

  
    








    /*await Promise.all [
      this.pop.click()
    ]*/




/*const [page6] = await Promise.all([
  page5.waitForEvent('popup'),
  page5.getByRole('link', { name: 'Ir a tratamientos ' }).click()

  await page.getByPlaceholder('Escriba su usuario...').press('Tab');

]);*/


