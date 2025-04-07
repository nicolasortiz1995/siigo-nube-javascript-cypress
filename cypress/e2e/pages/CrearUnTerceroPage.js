import { generadorDatos } from "@pages/utils/GeneradorDatos";

class CrearUnTerceroPage {
    static _tiempoDeEsperaMaximo = 20000;

    elementos = {
        hostInputIdentificacion: () => cy.get('siigo-identification-input-web', { timeout: CrearUnTerceroPage._tiempoDeEsperaMaximo }),
        hostInputCodigoDeLaSucursal: () => cy.get('siigo-textfield-web[type="number"][maxlength="3"]', { timeout: CrearUnTerceroPage._tiempoDeEsperaMaximo }),
        hostInputCiudad: () => cy.get('siigo-autocomplete-web[key-id="city"]', { timeout: CrearUnTerceroPage._tiempoDeEsperaMaximo }),
        hostDatosBasicos: () => cy.get('siigo-textfield-web', { timeout: CrearUnTerceroPage._tiempoDeEsperaMaximo }),
        hostDatosContacto: () => cy.get('siigo-phone-web', { timeout: CrearUnTerceroPage._tiempoDeEsperaMaximo }),
        hostCorreoElectronicoCuandoAplique: () => cy.get('siigo-textfield-web[name="contactemail"]'),
        hostTipoDeRegimenIVA: () => cy.get('siigo-dropdownlist-web'),
        hostIndicativo: () => cy.get('siigo-textfield-web[name="indicativephone"]'),
        hostNumeroTelefonoFacturacion: () => cy.get('siigo-textfield-web[name="contactphone"]'),
        hostContactosNombre: () => cy.get('siigo-textfield-web[name="FirstName"]'),
        hostContactosApellido: () => cy.get('siigo-textfield-web[name="LastName"]'),
        hostContactosCorreo: () => cy.get('siigo-emailinput-web[name="Email"]'),
        botonAbrirSeccionContactos: () => cy.contains('div', 'Contactos').find('i.clickable.arrow.down'),
        botonAbrirSeccionVendedorYCobrador: () => cy.contains('div', 'Vendedor y cobrador').find('i.clickable.arrow.down'),
        botonAbrirSeccionObservaciones: () => cy.contains('div', 'Observaciones').find('i.clickable.arrow.down'),
        hostContactosCargo: () => cy.get('siigo-textfield-web[name="Charge"]'),
        hostContactosIndicativo: () => cy.get('siigo-textfield-web[name="Indicative"]'),
        hostContactosNumero: () => cy.get('siigo-textfield-web[name="Number"]'),
        hostVendedor: () => cy.get('siigo-autocomplete-web[key-id="salesman"]'),
        hostCobrador: () => cy.get('siigo-autocomplete-web[key-id="collector"]'),
        hostObservacion: () => cy.get('siigo-textarea-web'),
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
        inputYLabelNombres: () => ({input: 'input.mdc-text-field__input[type="text"]', label: 'Nombres'}),
        inputYLabelApellidos: () => ({input: 'input.mdc-text-field__input[type="text"]', label: 'Apellidos'}),
        inputYLabelNombreComercial: () => ({input: 'input.mdc-text-field__input[type="text"]', label: 'Nombre comercial'}),
        inputYLabelCiudad: () => ({input: 'input.mdc-text-field__input[type="text"]', label: ' Ciudad'}),
        inputYLabelDireccion: () => ({input: 'input.mdc-text-field__input[type="text"]', label: 'Dirección'}),
        inputYLabelCodigoPostal: () => ({input: 'input.mdc-text-field__input[type="text"]', label: 'Código postal'}),
    }   

    //Funciones unitarias
    escribirNumeroIdentificacion(numeroIdentificacion) {
        this.elementos.hostInputIdentificacion().shadow()
        .find(this.elementos.inputIdentificacion())
        .should('be.visible')
        .type(numeroIdentificacion, { force: true });
    }

    escribirCodigoDeLaSucursal(codigoDeLaSucursal) {
        this.elementos.hostInputCodigoDeLaSucursal().first().shadow()
        .find(this.elementos.inputCodigoDeLaSucursal())
        .should('be.visible')
        .type(codigoDeLaSucursal, { force: true });
    }

    escribirNombresCompletos(nombresCompletos) {
        this.llenarCampoOcultoPorLabel(
            this.elementos.hostDatosBasicos(), 
            this.elementos.inputYLabelNombres().input, 
            this.elementos.inputYLabelNombres().label, 
            nombresCompletos)
    }

    escribirApellidosCompletos(apellidosCompletos) {
        this.llenarCampoOcultoPorLabel(
            this.elementos.hostDatosBasicos(), 
            this.elementos.inputYLabelApellidos().input, 
            this.elementos.inputYLabelApellidos().label, 
            apellidosCompletos)
    }

    escribirNombreComercial(nombreComercial) {
        this.llenarCampoOcultoPorLabel(
            this.elementos.hostDatosBasicos(), 
            this.elementos.inputYLabelNombreComercial().input, 
            this.elementos.inputYLabelNombreComercial().label, 
            nombreComercial)
    }

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

    escribirDireccion(direccion) {
        this.llenarCampoOcultoPorLabel(
            this.elementos.hostDatosBasicos(), 
            this.elementos.inputYLabelDireccion().input, 
            this.elementos.inputYLabelDireccion().label, 
            direccion)
    }

    escribirIndicativo(indicativo) {
        this.elementos.hostDatosContacto().shadow()
        .find(this.elementos.inputIndicativo())
        .should('be.visible')
        .type(indicativo, { force: true });
    }

    escribirNumeroDeTelefono(numeroDeTelefono) {
        this.elementos.hostDatosContacto().shadow()
        .find(this.elementos.inputNumeroDeTelefono())
        .should('be.visible')
        .type(numeroDeTelefono, { force: true });
    }

    escribirExtension(extension) {
        this.elementos.hostDatosContacto().shadow()
        .find(this.elementos.inputExtension())
        .should('be.visible')
        .type(extension, { force: true });
    }

    escribirCorreoElectronicoCuandoAplique(correoElectronico) {
        this.elementos.hostCorreoElectronicoCuandoAplique().shadow()
        .find(this.elementos.inputCorreoElectronicoCuandoAplique())
        .should('be.visible')
        .type(correoElectronico, { force: true });
    }

    seleccionarTipoDeRegimenIVA(tipoDeRegimenIVA) {
        this.elementos.hostTipoDeRegimenIVA().eq(3)
        .should('exist')
        .shadow()
        .find(this.elementos.inputTipoDeRegimenIVA())
        .should('be.visible')
        .click({ force: true }); // forzamos el clic por si hay overlays invisibles
        cy.contains('span', tipoDeRegimenIVA, { timeout: CrearUnTerceroPage._tiempoDeEsperaMaximo }).should('be.visible').click()

    }

    escribirIndicativoFacturacion(indicativoFacturacion) {
        this.elementos.hostIndicativo().shadow()
        .find(this.elementos.inputIndicativoFacturacion())
        .should('be.visible')
        .type(indicativoFacturacion, { force: true });
    }

    escribirNumeroTelefonoFacturacionFacturacion(numeroTelefonoFacturacion) {
        this.elementos.hostNumeroTelefonoFacturacion().shadow()
        .find(this.elementos.inputNumeroTelefonoFacturacion())
        .should('be.visible')
        .type(numeroTelefonoFacturacion, { force: true });
    }

    escribirCodigoPostal(direccion) {
        this.llenarCampoOcultoPorLabel(
            this.elementos.hostDatosBasicos(), 
            this.elementos.inputYLabelCodigoPostal().input, 
            this.elementos.inputYLabelCodigoPostal().label, 
            direccion)
    }

    abrirSeccionContactos() {
        this.elementos.botonAbrirSeccionContactos()
        .should('be.visible')
        .click({ force: true });
    }
    

    escribirContactosNombre(nombreContacto) {
        this.elementos.hostContactosNombre().shadow()
        .find(this.elementos.inputContactosNombre())
        .should('be.visible')
        .type(nombreContacto, { force: true });
    }

    escribirContactosApellido(apellidoContacto){
        this.elementos.hostContactosApellido().shadow()
        .find(this.elementos.inputContactosApellido())
        .should('be.visible')
        .type(apellidoContacto, { force: true });
    }

    escribirContactosCorreo(correoContacto){
        this.elementos.hostContactosCorreo().shadow()
        .find(this.elementos.inputContactosCorreo())
        .should('be.visible')
        .type(correoContacto, { force: true });
    }

    escribirContactosCargo(cargoContacto){
        this.elementos.hostContactosCargo().shadow()
        .find(this.elementos.inputContactosCargo())
        .should('be.visible')
        .type(cargoContacto, { force: true });
    }

    escribirContactosIndicativo(indicativoContacto){
        this.elementos.hostContactosIndicativo().shadow()
        .find(this.elementos.inputContactosIndicativo())
        .should('be.visible')
        .type(indicativoContacto, { force: true });
    }

    escribirContactosNumero(numeroContacto){
        this.elementos.hostContactosNumero().shadow()
        .find(this.elementos.inputContactosNumero())
        .should('be.visible')
        .type(numeroContacto, { force: true });
    }
    
    abrirSeccionVendedorYCobrador() {
        this.elementos.botonAbrirSeccionVendedorYCobrador()
        .should('be.visible')
        .click({ force: true });
    }

    escribirVendedor(nombreVendedor){
        this.elementos.hostVendedor().shadow()
        .find(this.elementos.inputVendedor())
        .should('be.visible')
        .type(nombreVendedor, { force: true });
        cy.contains('div', nombreVendedor, { timeout: CrearUnTerceroPage._tiempoDeEsperaMaximo }).should('be.visible').click()
    }

    escribirCobrador(nombreCobrador){
        this.elementos.hostCobrador().shadow()
        .find(this.elementos.inputCobrador())
        .should('be.visible')
        .type(nombreCobrador, { force: true });
        cy.contains('div', nombreCobrador, { timeout: CrearUnTerceroPage._tiempoDeEsperaMaximo }).should('be.visible').click()
    }

    abrirSeccionObservaciones() {
        this.elementos.botonAbrirSeccionObservaciones()
        .should('be.visible')
        .click({ force: true });
    }

    escribirObservacion(observacion){
        this.elementos.hostObservacion().shadow()
        .find(this.elementos.inputObservacion())
        .should('be.visible')
        .type(observacion, { force: true });
    }

    //Funciones generales
    llenarCampoOcultoPorLabel(selectorHost, inputSelector, labelSelector, valorAEscribir) {
        selectorHost.each(($host) => {
            cy.wrap($host)
                .shadow()
                .find('label')
                .invoke('text')
                .then((text) => {
                // Limpiar el label, removiendo asteriscos y espacios extras
                const labelClean = text.replace(/\*/g, '').trim();
                cy.log(`Label limpio: "${labelClean}"`);
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

    llenarFormularioDeDatosBasicos(){
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

    llenarFormularioDatosParaFacturacionYEnvio(){
        this.escribirCorreoElectronicoCuandoAplique(generadorDatos.generarCorreoElectronico());
        this.seleccionarTipoDeRegimenIVA(generadorDatos.generarTipoDeRegimenIVA());
        this.escribirIndicativoFacturacion(generadorDatos.generarIndicativo());
        this.escribirNumeroTelefonoFacturacionFacturacion(generadorDatos.generarNumeroTelefono());
        this.escribirCodigoPostal(generadorDatos.generarCodigoPostal());
    }

    llenarFormularioContactos(){
        this.abrirSeccionContactos();
        this.escribirContactosNombre(generadorDatos.generarNombreContacto());
        this.escribirContactosApellido(generadorDatos.generarApellidoContacto());
        this.escribirContactosCorreo(generadorDatos.generarCorreoElectronico());
        this.escribirContactosCargo(generadorDatos.generarCargo());
        this.escribirContactosIndicativo(generadorDatos.generarIndicativo());
        this.escribirContactosNumero(generadorDatos.generarNumeroTelefono());
    }

    llenarFormularioVendedorYCobrador(){
        crearUnTerceroPage.abrirSeccionVendedorYCobrador();
        crearUnTerceroPage.escribirVendedor("retoautomationsiigo@yopmail.com");
        crearUnTerceroPage.escribirCobrador("retoautomationsiigo@yopmail.com");
    }

    llenarFormularioObservaciones(){
        crearUnTerceroPage.abrirSeccionObservaciones();
        crearUnTerceroPage.escribirObservacion(generadorDatos.generarObservacion());
    }

}

export const crearUnTerceroPage = new CrearUnTerceroPage();
