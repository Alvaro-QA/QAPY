import { test, Locator, expect } from '@playwright/test';
import { loginDentalink} from '../pages/login-page';
import { Prestacion} from '../pages/prestacion-page';
//import { EvolucionarPacientes } from '../pages/evolucionar-page';

// pages
let login : loginDentalink
let prestacion : Prestacion
//let evolucionar : EvolucionarPacientes


test('test', async ({page}) => {

const login = new loginDentalink(page);
const prestacion = new Prestacion (page);

   await login.goTo();
   await login.loginUser("AlvaroPrecios","1234");
   await prestacion.agregarPrestacion();



 const newPage = await test.step("new tab", async () => { 

   //
   const invoolucionar = new Prestacion(page);

   const newtab = await invoolucionar.abrirTab();
   await newtab.tab0()

   
      })


// test.step("new tab", async () => {

//       const evolucionar = new Prestacion(page);
   
//       //const newTab = await evolucionar.abrirTab();
      
//       //await  newTab.tab0();   
//       })

   // test.step("new tab", async () =>{

   // const evolucionar = new Prestacion(page);

   // const newtab = await evolucionar.abrirTab();

   // await  newtab.tab0();

   // })

   

   
   // // const [newTab] = await Promise.all([
   // //       page.waitForEvent("popup"),

   //    ]);  



  // await Prestacion.agregarPrestacion();
  //const newTab = await Prestacion.agregarPrestacion(); 
   
 
 
 }); 