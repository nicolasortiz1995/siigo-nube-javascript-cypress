// Clase que representa la página posterior a la creación de un perfil o tercero.
// Contiene elementos y acciones para confirmar y validar el éxito de la operación.
class PerfilCreadoPage {
    // Tiempo máximo de espera configurado para búsquedas de elementos (20 segundos)
    static _tiempoDeEsperaMaximo = 20000;

    // Definición de los elementos de la página
    elementos = {
        // Botón "Guardar", ubicado por clase CSS y texto "Guardar"
        botonGuardar: () => cy.get('button.button.green.filled', { timeout: PerfilCreadoPage._tiempoDeEsperaMaximo }).contains('Guardar'),

        // Mensaje de éxito que aparece cuando un tercero es guardado correctamente
        mensajeTerceroGuardadoExistosamente: () => cy.contains('div', 'Tercero guardado exitosamente', { timeout: PerfilCreadoPage._tiempoDeEsperaMaximo })
    }

    // ========== MÉTODOS FUNCIONALES ==========

    // Hace clic en el botón "Guardar" si está visible
    clicBotonGuardar() {
        this.elementos.botonGuardar()
            .should('be.visible')
            .click();
    }

    // Valida que un mensaje específico (pasado como argumento) esté visible en la página
    validarMensajeDeCreacionExitosa(mennsajeAValidaar) {
        cy.contains('div', mennsajeAValidaar).should('be.visible');
    }

    // Verifica que se muestre un título con el mensaje de perfil creado exitosamente
    validarMensajeDePerfilCreado(mensajePerfilCreado) {
        cy.contains('h2', mensajePerfilCreado).should('be.visible');
    }

    // ========== MÉTODOS GENERALES ==========
    // (Actualmente sin implementación, reservado para futuras funcionalidades generales)
}

// Exporta una instancia reutilizable de la clase PerfilCreadoPage
export const perfilCreadoPage = new PerfilCreadoPage();