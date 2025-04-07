// Importación de funciones de Cucumber para definir los pasos Given/When/Then
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Importación de las páginas necesarias para interactuar con la UI
import { dashboardPage } from "@pages/DashboardPage";
import { crearUnTerceroPage } from "@pages/CrearUnTerceroPage";
import { perfilCreadoPage } from "@pages/PerfilCreadoPage";

// ========== PASOS CUANDO (When) ==========

// Paso que hace clic en el botón superior indicado (ej. "Crear")
When("hago clic en el botón superior {string}", (nombreBoton) => {
    dashboardPage.clicBotonCrear();
    console.log("Se hizo clic en el botón superior string: " + JSON.stringify(nombreBoton));
});

// Paso que selecciona una opción del menú superior (ej. "Clientes")
When("selecciono la opción {string}", (opcionSeleccionada) => {
    dashboardPage.clicBotonClientes();
    console.log("Se seleccionó la opción: " + JSON.stringify(opcionSeleccionada));
});

// Paso para llenar el formulario de Datos Básicos con datos válidos
When("completo el formulario de Datos básicos con datos válidos", () => {
    crearUnTerceroPage.llenarFormularioDeDatosBasicos();
});

// Paso para llenar el formulario de Datos para facturación y envío
When("completo el formulario de Datos para facturación y envío con datos válidos", () => {
    crearUnTerceroPage.llenarFormularioDatosParaFacturacionYEnvio();
});

// Paso para llenar el formulario de Contactos con datos válidos
When("completo el formulario de Contactos con datos válidos", () => {
    crearUnTerceroPage.llenarFormularioContactos();
});

// Paso para llenar el formulario de Vendedor y cobrador
When("completo el formulario de Vendedor y cobrador con datos válidos", () => {
    crearUnTerceroPage.llenarFormularioVendedorYCobrador();
});

// Paso para llenar el formulario de Observaciones
When("completo el formulario de Observaciones con datos válidos", () => {
    crearUnTerceroPage.llenarFormularioObservaciones();
});

// Paso que hace clic en un botón específico (ej. "Guardar")
When("hago clic en {string}", (nombreBoton) => {
    perfilCreadoPage.clicBotonGuardar();
    console.log("Se hizo clic en el botón: " + JSON.stringify(nombreBoton));
});

// ========== PASOS ENTONCES (Then) ==========

// Paso que valida que el sistema muestre un mensaje de éxito luego de crear un perfil
Then("el sistema muestra un mensaje de éxito {string}", (mensajeExito) => {
    perfilCreadoPage.validarMensajeDeCreacionExitosa(mensajeExito);
    console.log("El sistema mostró el mensaje: " + JSON.stringify(mensajeExito));
});

// Paso que valida que el sistema muestre un encabezado con el perfil creado
Then("puedo visualizar el {string}", (mensajePerfilCreado) => {
    perfilCreadoPage.validarMensajeDePerfilCreado(mensajePerfilCreado);
    console.log("El sistema mostró el mensaje: " + JSON.stringify(mensajePerfilCreado));
});
