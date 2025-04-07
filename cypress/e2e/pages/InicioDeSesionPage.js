class InicioDeSesionPage {
    elementos = {
        hostUsuario: () => cy.get('input-atom#username', { timeout: 15000 }),
        hostContrasena: () => cy.get('input-atom#current-password', { timeout: 15000 }),
        botonIngresar: () => cy.get('#login-submit'),
        labelNombreUsuario: () => cy.get('.company-header-title', { timeout: 20000 }),

    };

    // Funciones unitarias
    ingresarUsuario(usuario) {
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        this.elementos.hostUsuario()
            .should(($el) => {expect($el[0].shadowRoot).to.exist;})
            .shadow() // Accede al shadow DOM del host de usuario
            .find('input#username-input', { timeout: 15000 })
            .should('be.visible')
            .type(usuario, { force: true });
    }

    ingresarContrasena(contrasena) {
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        this.elementos.hostContrasena()
            .should(($el) => {expect($el[0].shadowRoot).to.exist;})
            .shadow() // Accede al shadow DOM del host de contraseña
            .find('input#password-input', { timeout: 15000 })
            .should('be.visible')
            .type(contrasena, { force: true });
    }

    clicBotonIngresar() {
        this.elementos.botonIngresar().click();
    }

    validarNombreUsuarioVisible(){
        this.elementos.labelNombreUsuario().should('be.visible');
    }

    clicBotonCrear() {
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        this.elementos.botonCrear()
            .should(($el) => {expect($el[0].shadowRoot).to.exist;})
            .shadow()
            .find('button')
            .should('be.visible')
            .click({ force: true });
    }

    // Función general que recibe usuario y contraseña
    iniciarSesionSiigoNube(usuario, contrasena) {
        this.ingresarUsuario(usuario);
        this.ingresarContrasena(contrasena);
        this.clicBotonIngresar();
    }


}

export const inicioDeSesionPage = new InicioDeSesionPage();
