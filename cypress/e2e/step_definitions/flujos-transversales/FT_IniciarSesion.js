import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { inicioDeSesionPage } from "@pages/InicioDeSesionPage";

Given("que estoy en la pantalla de inicio de sesión", () => {
    cy.visit(Cypress.env("URL_SIIGO_NUBE")+"#/login"); 
});
    
When("ingreso correctamente mis credenciales de acceso", () => {
    inicioDeSesionPage.iniciarSesionSiigoNube(Cypress.env("QA_USER"), Cypress.env("QA_PASSWORD"));
});

Then("debería poder iniciar sesión correctamente y acceder a la plataforma", () => {
    inicioDeSesionPage.validarNombreUsuarioVisible();
});
