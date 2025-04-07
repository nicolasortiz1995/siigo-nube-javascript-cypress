import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { dashboardPage } from "@pages/DashboardPage";
import { crearUnTerceroPage } from "@pages/CrearUnTerceroPage";
import { perfilCreadoPage } from "@pages/PerfilCreadoPage";

When("hago clic en el botón superior {string}", (nombreBoton) => {
    dashboardPage.clicBotonCrear();

    console.log("Se hizo clic en el botón superior string: " + JSON.stringify(nombreBoton));
});

When("selecciono la opción {string}", (opcionSeleccionada) => {
    dashboardPage.clicBotonClientes();
    console.log("Se seleccionó la opción: " + JSON.stringify(opcionSeleccionada));
});

When("completo el formulario de Datos básicos con datos válidos", () => {
    crearUnTerceroPage.llenarFormularioDeDatosBasicos();
});

When("completo el formulario de Datos para facturación y envío con datos válidos", () => {
    crearUnTerceroPage.llenarFormularioDatosParaFacturacionYEnvio();
});

When("completo el formulario de Contactos con datos válidos", () => {
    crearUnTerceroPage.llenarFormularioContactos();
});

When("completo el formulario de Vendedor y cobrador con datos válidos", () => {
    crearUnTerceroPage.llenarFormularioVendedorYCobrador();
});

When("completo el formulario de Observaciones con datos válidos", () => {
    crearUnTerceroPage.llenarFormularioObservaciones();
});

When("hago clic en {string}", (nombreBoton) => {
    perfilCreadoPage.clicBotonGuardar();
    console.log("Se hizo clic en el botón: " + JSON.stringify(nombreBoton));
});

Then("el sistema muestra un mensaje de éxito {string}", (mensajeExito) => {
    perfilCreadoPage.validarMensajeDeCreacionExitosa(mensajeExito);
    console.log("El sistema mostró el mensaje: "+ JSON.stringify(mensajeExito));
})

Then("puedo visualizar el {string}", (mensajePerfilCreado) => {
    perfilCreadoPage.validarMensajeDePerfilCreado(mensajePerfilCreado);
    console.log("El sistema mostró el mensaje: "+ JSON.stringify(mensajePerfilCreado));
});