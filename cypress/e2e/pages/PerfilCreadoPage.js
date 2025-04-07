class PerfilCreadoPage{
    static _tiempoDeEsperaMaximo = 20000;

    elementos = {
        botonGuardar: () => cy.get('button.button.green.filled', { timeout: PerfilCreadoPage._tiempoDeEsperaMaximo }).contains('Guardar'),
        mensajeTerceroGuardadoExistosamente: () => cy.contains('div', 'Tercero guardado exitosamente',{ timeout: PerfilCreadoPage._tiempoDeEsperaMaximo })

    }


    //Funciones unitarias
    clicBotonGuardar() {
        this.elementos.botonGuardar()
        .should('be.visible')
        .click();
    }

    validarMensajeDeCreacionExitosa(mennsajeAValidaar) {
        cy.contains('div', mennsajeAValidaar).should('be.visible');
    }

    validarMensajeDePerfilCreado(mensajePerfilCreado){
        cy.contains('h2', mensajePerfilCreado).should('be.visible');
    }

    //Funciones generales
}
export const perfilCreadoPage = new PerfilCreadoPage();