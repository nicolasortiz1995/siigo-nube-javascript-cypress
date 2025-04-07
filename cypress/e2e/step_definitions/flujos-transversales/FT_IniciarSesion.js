// Importación de funciones de Cucumber para definir los pasos Given/When/Then
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Importación de la página de inicio de sesión
import { inicioDeSesionPage } from "@pages/InicioDeSesionPage";

// ========== PASO GIVEN ==========

// Paso que navega a la URL de inicio de sesión de la plataforma
Given("que estoy en la pantalla de inicio de sesión", () => {
    cy.visit(Cypress.env("URL_SIIGO_NUBE")+"#/login"); 
});

// ========== PASO WHEN ==========

// Paso que ingresa las credenciales de acceso desde variables de entorno
When("ingreso correctamente mis credenciales de acceso", () => {
    inicioDeSesionPage.iniciarSesionSiigoNube(Cypress.env("QA_USER"), Cypress.env("QA_PASSWORD"));
});

// ========== PASO THEN ==========

// Paso que valida que el usuario ha iniciado sesión exitosamente
Then("debería poder iniciar sesión correctamente y acceder a la plataforma", () => {
    inicioDeSesionPage.validarNombreUsuarioVisible();
});
