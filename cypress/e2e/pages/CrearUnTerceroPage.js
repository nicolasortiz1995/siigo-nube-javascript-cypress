import { generadorDatos } from "@pages/utils/GeneradorDatos";

// Clase que encapsula toda la lógica y elementos de la página para crear un tercero en el sistema
class CrearUnTerceroPage {
    // Tiempo máximo de espera para los elementos de la página (20 segundos)
    static _tiempoDeEsperaMaximo = 20000;

    // Selectores de los elementos HTML utilizados en la interfaz de usuario
    elementos = {
        // Campo de identificación del tercero
        hostInputIdentificacion: () => cy.get('siigo-identification-input-web', { timeout: CrearUnTerceroPage._tiempoDeEsperaMaximo }),
        
        // Campo para el código de la sucursal
        hostInputCodigoDeLaSucursal: () => cy.get('siigo-textfield-web[type="number"][maxlength="3"]', { timeout: CrearUnTerceroPage._tiempoDeEsperaMaximo }),
        
        // Campo para seleccionar la ciudad
        hostInputCiudad: () => cy.get('siigo-autocomplete-web[key-id="city"]', { timeout: CrearUnTerceroPage._tiempoDeEsperaMaximo }),
        
        // Agrupación de campos de datos básicos
        hostDatosBasicos: () => cy.get('siigo-textfield-web', { timeout: CrearUnTerceroPage._tiempoDeEsperaMaximo }),
        
        // Agrupación de campos de contacto
        hostDatosContacto: () => cy.get('siigo-phone-web', { timeout: CrearUnTerceroPage._tiempoDeEsperaMaximo }),
        
        // Campo para correo electrónico de contacto cuando aplique
        hostCorreoElectronicoCuandoAplique: () => cy.get('siigo-textfield-web[name="contactemail"]'),

        // Menú desplegable para seleccionar régimen de IVA
        hostTipoDeRegimenIVA: () => cy.get('siigo-dropdownlist-web'),

        // Campo para el indicativo del número de teléfono de facturación
        hostIndicativo: () => cy.get('siigo-textfield-web[name="indicativephone"]'),

        // Campo para el número de teléfono de facturación
        hostNumeroTelefonoFacturacion: () => cy.get('siigo-textfield-web[name="contactphone"]'),

        // Campos para contacto (nombre, apellido, correo, etc.)
        hostContactosNombre: () => cy.get('siigo-textfield-web[name="FirstName"]'),
        hostContactosApellido: () => cy.get('siigo-textfield-web[name="LastName"]'),
        hostContactosCorreo: () => cy.get('siigo-emailinput-web[name="Email"]'),

        // Botones para desplegar secciones
        botonAbrirSeccionContactos: () => cy.contains('div', 'Contactos').find('i.clickable.arrow.down'),
        botonAbrirSeccionVendedorYCobrador: () => cy.contains('div', 'Vendedor y cobrador').find('i.clickable.arrow.down'),
        botonAbrirSeccionObservaciones: () => cy.contains('div', 'Observaciones').find('i.clickable.arrow.down'),

        // Más campos para datos de contacto
        hostContactosCargo: () => cy.get('siigo-textfield-web[name="Charge"]'),
        hostContactosIndicativo: () => cy.get('siigo-textfield-web[name="Indicative"]'),
        hostContactosNumero: () => cy.get('siigo-textfield-web[name="Number"]'),

        // Autocompletado para vendedor y cobrador
        hostVendedor: () => cy.get('siigo-autocomplete-web[key-id="salesman"]'),
        hostCobrador: () => cy.get('siigo-autocomplete-web[key-id="collector"]'),

        // Campo para observaciones
        hostObservacion: () => cy.get('siigo-textarea-web'),

        // Inputs internos (dentro del shadow DOM o directos)
        inputCiudad: () => 'input[id="inputAutocompletecity"]',
        inputIndicativo: () => 'input.mdc-text-field__input.siigo-phone[name="Indicativo"]',
        inputNumeroDeTelefono: () => 'input.mdc-text-field__input.siigo-phone[name="# de Teléfono"]',
        inputExtension: () => 'input.mdc-text-field__input.siigo-phone[name="Extensión"]',
        inputCorreoElectronicoCuandoAplique: () => 'input.mdc-text-field__input[name="contactemail"]',
        inputTipoDeRegimenIVA: () => 'i.mdc-select__dropdown-icon.azure',
        inputIndicativoFacturacion: ()=> 'input.mdc-text-field__input[name="indicativephone"]',
        inputNumeroTelefonoFacturacion: ()=> 'input.mdc-text-field__input[name="contactphone"]',
        inputContactosNombre: ()=> 'input.mdc-text-field__input[name="FirstName"]',
        inputContactosApellido: ()=> 'input.mdc-text-field__input[name="LastName"]',
        inputContactosCorreo: ()=> 'input[id="emailinput"]',
        inputContactosCargo: ()=> 'input.mdc-text-field__input[name="Charge"]',
        inputContactosIndicativo: ()=> 'input.mdc-text-field__input[name="Indicative"]',
        inputContactosNumero: ()=> 'input.mdc-text-field__input[name="Number"]',
        inputVendedor: () => 'input.mdc-text-field__input[name="inputAutocompletesalesman"]',
        inputCobrador: () => 'input.mdc-text-field__input[name="inputAutocompletecollector"]',
        inputObservacion: ()=> 'textarea[id="textareainput"]',
        inputIdentificacion: () => 'input.input-identification',
        inputCodigoDeLaSucursal: () => 'input.mdc-text-field__input[type="number"]',

        // Inputs con sus respectivas etiquetas asociadas (para campos ocultos por label)
        inputYLabelNombres: () => ({input: 'input.mdc-text-field__input[type="text"]', label: 'Nombres'}),
        inputYLabelApellidos: () => ({input: 'input.mdc-text-field__input[type="text"]', label: 'Apellidos'}),
        inputYLabelNombreComercial: () => ({input: 'input.mdc-text-field__input[type="text"]', label: 'Nombre comercial'}),
        inputYLabelCiudad: () => ({input: 'input.mdc-text-field__input[type="text"]', label: ' Ciudad'}),
        inputYLabelDireccion: () => ({input: 'input.mdc-text-field__input[type="text"]', label: 'Dirección'}),
        inputYLabelCodigoPostal: () => ({input: 'input.mdc-text-field__input[type="text"]', label: 'Código postal'}),
    }   

    // ========== MÉTODOS FUNCIONALES ==========

    // Escribe el número de identificación del tercero
    escribirNumeroIdentificacion(numeroIdentificacion) {
        this.elementos.hostInputIdentificacion().shadow()
        .find(this.elementos.inputIdentificacion())
        .should('be.visible')
        .type(numeroIdentificacion, { force: true });
    }

    // Escribe el código de la sucursal
    escribirCodigoDeLaSucursal(codigoDeLaSucursal) {
        this.elementos.hostInputCodigoDeLaSucursal().first().shadow()
        .find(this.elementos.inputCodigoDeLaSucursal())
        .should('be.visible')
        .type(codigoDeLaSucursal, { force: true });
    }

    // Escribe los nombres completos del tercero
    escribirNombresCompletos(nombresCompletos) {
        this.llenarCampoOcultoPorLabel(
            this.elementos.hostDatosBasicos(), 
            this.elementos.inputYLabelNombres().input, 
            this.elementos.inputYLabelNombres().label, 
            nombresCompletos)
    }

    // Escribe los apellidos completos del tercero
    escribirApellidosCompletos(apellidosCompletos) {
        this.llenarCampoOcultoPorLabel(
            this.elementos.hostDatosBasicos(), 
            this.elementos.inputYLabelApellidos().input, 
            this.elementos.inputYLabelApellidos().label, 
            apellidosCompletos)
    }

    // Escribe el nombre comercial del tercero
    escribirNombreComercial(nombreComercial) {
        this.llenarCampoOcultoPorLabel(
            this.elementos.hostDatosBasicos(), 
            this.elementos.inputYLabelNombreComercial().input, 
            this.elementos.inputYLabelNombreComercial().label, 
            nombreComercial)
    }

    // Selecciona la ciudad del tercero
    escribirCiudad(ciudad) {
        this.elementos.hostInputCiudad().should('be.visible');

        this.elementos.hostInputCiudad().shadow().find('label').click({ force: true }); 

        this.elementos.hostInputCiudad()
        .shadow()
        .find(this.elementos.inputCiudad(), { timeout: CrearUnTerceroPage._tiempoDeEsperaMaximo })
        .should('be.visible')
        .type(ciudad);

        cy.contains('div', ciudad, { timeout: CrearUnTerceroPage._tiempoDeEsperaMaximo }).should('be.visible').click()
    }

    // Escribe la dirección del tercero
    escribirDireccion(direccion) {
        this.llenarCampoOcultoPorLabel(
            this.elementos.hostDatosBasicos(), 
            this.elementos.inputYLabelDireccion().input, 
            this.elementos.inputYLabelDireccion().label, 
            direccion)
    }

    // Escribe el indicativo del número de contacto
    escribirIndicativo(indicativo) {
        this.elementos.hostDatosContacto().shadow()
        .find(this.elementos.inputIndicativo())
        .should('be.visible')
        .type(indicativo, { force: true });
    }

    // Escribe el número de teléfono
    escribirNumeroDeTelefono(numeroDeTelefono) {
        this.elementos.hostDatosContacto().shadow()
        .find(this.elementos.inputNumeroDeTelefono())
        .should('be.visible')
        .type(numeroDeTelefono, { force: true });
    }

    // Escribe la extensión del número de teléfono
    escribirExtension(extension) {
        this.elementos.hostDatosContacto().shadow()
        .find(this.elementos.inputExtension())
        .should('be.visible')
        .type(extension, { force: true });
    }

    // Escribe el correo electrónico de contacto cuando aplique
    escribirCorreoElectronicoCuandoAplique(correoElectronico) {
        this.elementos.hostCorreoElectronicoCuandoAplique().shadow()
        .find(this.elementos.inputCorreoElectronicoCuandoAplique())
        .should('be.visible')
        .type(correoElectronico, { force: true });
    }

    // Selecciona el tipo de régimen de IVA
    seleccionarTipoDeRegimenIVA(tipoDeRegimenIVA) {
        this.elementos.hostTipoDeRegimenIVA().eq(3)
        .should('exist')
        .shadow()
        .find(this.elementos.inputTipoDeRegimenIVA())
        .should('be.visible')
        .click({ force: true }); // forzamos el clic por si hay overlays invisibles

        cy.contains('span', tipoDeRegimenIVA, { timeout: CrearUnTerceroPage._tiempoDeEsperaMaximo }).should('be.visible').click()
    }

    // Escribe el indicativo de facturación
    escribirIndicativoFacturacion(indicativoFacturacion) {
        this.elementos.hostIndicativo().shadow()
        .find(this.elementos.inputIndicativoFacturacion())
        .should('be.visible')
        .type(indicativoFacturacion, { force: true });
    }

    // Escribe el número de teléfono de facturación
    escribirNumeroTelefonoFacturacionFacturacion(numeroTelefonoFacturacion) {
        this.elementos.hostNumeroTelefonoFacturacion().shadow()
        .find(this.elementos.inputNumeroTelefonoFacturacion())
        .should('be.visible')
        .type(numeroTelefonoFacturacion, { force: true });
    }

    // Escribe el código postal
    escribirCodigoPostal(direccion) {
        this.llenarCampoOcultoPorLabel(
            this.elementos.hostDatosBasicos(), 
            this.elementos.inputYLabelCodigoPostal().input, 
            this.elementos.inputYLabelCodigoPostal().label, 
            direccion)
    }

    // Expande la sección de contactos
    abrirSeccionContactos() {
        this.elementos.botonAbrirSeccionContactos()
        .should('be.visible')
        .click({ force: true });
    }

    // Escribe el nombre del contacto
    escribirContactosNombre(nombreContacto) {
        this.elementos.hostContactosNombre().shadow()
        .find(this.elementos.inputContactosNombre())
        .should('be.visible')
        .type(nombreContacto, { force: true });
    }

    // Escribe el apellido del contacto
    escribirContactosApellido(apellidoContacto){
        this.elementos.hostContactosApellido().shadow()
        .find(this.elementos.inputContactosApellido())
        .should('be.visible')
        .type(apellidoContacto, { force: true });
    }

    // Escribe el correo del contacto
    escribirContactosCorreo(correoContacto){
        this.elementos.hostContactosCorreo().shadow()
        .find(this.elementos.inputContactosCorreo())
        .should('be.visible')
        .type(correoContacto, { force: true });
    }

    // Escribe el cargo del contacto
    escribirContactosCargo(cargoContacto){
        this.elementos.hostContactosCargo().shadow()
        .find(this.elementos.inputContactosCargo())
        .should('be.visible')
        .type(cargoContacto, { force: true });
    }

    // Escribe el indicativo del contacto
    escribirContactosIndicativo(indicativoContacto){
        this.elementos.hostContactosIndicativo().shadow()
        .find(this.elementos.inputContactosIndicativo())
        .should('be.visible')
        .type(indicativoContacto, { force: true });
    }

    // Escribe el indicativo del numero del contacto
    escribirContactosNumero(numeroContacto){
        this.elementos.hostContactosNumero().shadow()
        .find(this.elementos.inputContactosNumero())
        .should('be.visible')
        .type(numeroContacto, { force: true });
    }
    
    // Expande la sección del formulario correspondiente a vendedor y cobrador
    abrirSeccionVendedorYCobrador() {
        this.elementos.botonAbrirSeccionVendedorYCobrador()
            .should('be.visible')
            .click({ force: true });
    }

    // Escribe el nombre del vendedor en el campo correspondiente dentro del componente shadow DOM
    escribirVendedor(nombreVendedor) {
        this.elementos.hostVendedor().shadow()
            .find(this.elementos.inputVendedor())
            .should('be.visible')
            .type(nombreVendedor, { force: true });

        // Selecciona la opción del vendedor sugerido en el dropdown
        cy.contains('div', nombreVendedor, { timeout: CrearUnTerceroPage._tiempoDeEsperaMaximo })
            .should('be.visible')
            .click();
    }

    // Escribe el nombre del cobrador en el campo correspondiente dentro del componente shadow DOM
    escribirCobrador(nombreCobrador) {
        this.elementos.hostCobrador().shadow()
            .find(this.elementos.inputCobrador())
            .should('be.visible')
            .type(nombreCobrador, { force: true });

        // Selecciona la opción del cobrador sugerido en el dropdown
        cy.contains('div', nombreCobrador, { timeout: CrearUnTerceroPage._tiempoDeEsperaMaximo })
            .should('be.visible')
            .click();
    }

    // === Sección: Observaciones ===

    // Expande la sección del formulario correspondiente a observaciones
    abrirSeccionObservaciones() {
        this.elementos.botonAbrirSeccionObservaciones()
            .should('be.visible')
            .click({ force: true });
    }

    // Escribe una observación en el campo correspondiente dentro del componente shadow DOM
    escribirObservacion(observacion) {
        this.elementos.hostObservacion().shadow()
            .find(this.elementos.inputObservacion())
            .should('be.visible')
            .type(observacion, { force: true });
    }

    // === Funciones generales ===

    // Función reutilizable para llenar campos que se encuentran ocultos o anidados dentro de etiquetas en shadow DOM
    llenarCampoOcultoPorLabel(selectorHost, inputSelector, labelSelector, valorAEscribir) {
        selectorHost.each(($host) => {
            cy.wrap($host)
                .shadow()
                .find('label')
                .invoke('text')
                .then((text) => {
                    // Limpia el texto del label (remueve asteriscos y espacios)
                    const labelClean = text.replace(/\*/g, '').trim();
                    cy.log(`Label limpio: "${labelClean}"`);
                    // Compara con el label objetivo y escribe si coincide
                    if (labelClean === labelSelector) {
                        cy.wrap($host)
                            .shadow()
                            .find(inputSelector)
                            .should('be.visible')
                            .clear()
                            .type(valorAEscribir, { force: true });
                    }
                });
        });
    }

    // === Funciones para llenar formularios completos (usando generador de datos) ===

    // Llena todos los campos de la sección de "Datos Básicos"
    llenarFormularioDeDatosBasicos() {
        this.escribirNumeroIdentificacion(generadorDatos.generarNumeroIdentificacion());
        this.escribirCodigoDeLaSucursal(generadorDatos.generarCodigoDeLaSucursal());
        this.escribirNombresCompletos(generadorDatos.generarNombreCompleto());
        this.escribirApellidosCompletos(generadorDatos.generarApellidosCompletos());
        this.escribirNombreComercial(generadorDatos.generarNombreComercial());
        this.escribirCiudad("CiudadPrueba");
        this.escribirDireccion(generadorDatos.generarDireccion());
        this.escribirIndicativo(generadorDatos.generarIndicativo());
        this.escribirNumeroDeTelefono(generadorDatos.generarNumeroTelefono());
        this.escribirExtension(generadorDatos.generarExtension());
    }

    // Llena todos los campos de la sección "Datos para Facturación y Envío"
    llenarFormularioDatosParaFacturacionYEnvio() {
        this.escribirCorreoElectronicoCuandoAplique(generadorDatos.generarCorreoElectronico());
        this.seleccionarTipoDeRegimenIVA(generadorDatos.generarTipoDeRegimenIVA());
        this.escribirIndicativoFacturacion(generadorDatos.generarIndicativo());
        this.escribirNumeroTelefonoFacturacionFacturacion(generadorDatos.generarNumeroTelefono());
        this.escribirCodigoPostal(generadorDatos.generarCodigoPostal());
    }

    // Llena los campos de la sección de "Contactos"
    llenarFormularioContactos() {
        this.abrirSeccionContactos();
        this.escribirContactosNombre(generadorDatos.generarNombreContacto());
        this.escribirContactosApellido(generadorDatos.generarApellidoContacto());
        this.escribirContactosCorreo(generadorDatos.generarCorreoElectronico());
        this.escribirContactosCargo(generadorDatos.generarCargo());
        this.escribirContactosIndicativo(generadorDatos.generarIndicativo());
        this.escribirContactosNumero(generadorDatos.generarNumeroTelefono());
    }

    // Llena los campos correspondientes al vendedor y cobrador
    llenarFormularioVendedorYCobrador() {
        this.abrirSeccionVendedorYCobrador();
        this.escribirVendedor("retoautomationsiigo@yopmail.com");
        this.escribirCobrador("retoautomationsiigo@yopmail.com");
    }

    // Llena la sección de observaciones
    llenarFormularioObservaciones() {
        this.abrirSeccionObservaciones();
        this.escribirObservacion(generadorDatos.generarObservacion());
    }

}

// Exportación de la instancia de la clase para su uso en pruebas
export const crearUnTerceroPage = new CrearUnTerceroPage();