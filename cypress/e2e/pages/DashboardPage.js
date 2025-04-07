class DashboardPage {
    static _tiempoDeEsperaMaximo = 20000;

    elementos = {
        botonCrear: () => cy.get('siigo-button-atom[data-id="header-create-button"]', { timeout: DashboardPage._tiempoDeEsperaMaximo }),
        botonClientes: () => cy.get('a[data-value="Clientes"]', { timeout: DashboardPage._tiempoDeEsperaMaximo }),
    }   

    // Funciones unitarias
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

    clicBotonClientes() {
        this.elementos.botonClientes().click();
    }
}

export const dashboardPage = new DashboardPage();
