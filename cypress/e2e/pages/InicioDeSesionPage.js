// Clase que representa la página de inicio de sesión en Siigo Nube.
// Contiene elementos y acciones necesarias para autenticar al usuario en el sistema.
class InicioDeSesionPage {
    // Elementos de la interfaz que se utilizan durante el proceso de inicio de sesión
    elementos = {
        // Input que representa el campo de usuario (dentro de un Web Component con Shadow DOM)
        hostUsuario: () => cy.get('input-atom#username', { timeout: 15000 }),

        // Input que representa el campo de contraseña (también dentro de un Shadow DOM)
        hostContrasena: () => cy.get('input-atom#current-password', { timeout: 15000 }),

        // Botón para enviar el formulario de inicio de sesión
        botonIngresar: () => cy.get('#login-submit'),

        // Etiqueta que contiene el nombre del usuario luego del inicio de sesión exitoso
        labelNombreUsuario: () => cy.get('.company-header-title', { timeout: 20000 }),
    };

    // ========== MÉTODOS FUNCIONALES ==========

    // Ingresa el nombre de usuario en el campo correspondiente.
    // Accede al shadow DOM del componente y escribe el valor forzadamente si está visible.
    ingresarUsuario(usuario) {
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        this.elementos.hostUsuario()
            .should(($el) => {expect($el[0].shadowRoot).to.exist;})
            .shadow()
            .find('input#username-input', { timeout: 15000 })
            .should('be.visible')
            .type(usuario, { force: true });
    }

    // Ingresa la contraseña en el campo correspondiente.
    // También accede al shadow DOM para escribir la clave forzadamente si está visible.
    ingresarContrasena(contrasena) {
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        this.elementos.hostContrasena()
            .should(($el) => {expect($el[0].shadowRoot).to.exist;})
            .shadow()
            .find('input#password-input', { timeout: 15000 })
            .should('be.visible')
            .type(contrasena, { force: true });
    }

    // Hace clic en el botón de "Ingresar" para autenticar al usuario.
    clicBotonIngresar() {
        this.elementos.botonIngresar().click();
    }

    // Verifica que el nombre del usuario esté visible después de iniciar sesión.
    validarNombreUsuarioVisible() {
        this.elementos.labelNombreUsuario().should('be.visible');
    }

    // (Este método no está definido en `elementos`) Hace clic sobre el botón de "Crear".
    // Nota: requiere que exista `this.elementos.botonCrear()` para que funcione correctamente.
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

    // Función compuesta que realiza el inicio de sesión completo:
    // ingresa el usuario, la contraseña y hace clic en "Ingresar".
    iniciarSesionSiigoNube(usuario, contrasena) {
        this.ingresarUsuario(usuario);
        this.ingresarContrasena(contrasena);
        this.clicBotonIngresar();
    }
}

// Exporta una instancia de la clase InicioDeSesionPage para su reutilización en otros archivos
export const inicioDeSesionPage = new InicioDeSesionPage();
