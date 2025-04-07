// Clase que representa la página principal del dashboard.
// Contiene elementos y acciones comunes utilizadas para interactuar con el dashboard.
class DashboardPage {
    // Tiempo máximo de espera para los elementos en la página (20 segundos)
    static _tiempoDeEsperaMaximo = 20000;

    // Objetos que encapsulan los selectores de elementos del DOM con Cypress
    elementos = {
        // Retorna el botón de "Crear" utilizando un selector personalizado y con tiempo de espera configurado
        botonCrear: () => cy.get('siigo-button-atom[data-id="header-create-button"]', { timeout: DashboardPage._tiempoDeEsperaMaximo }),
        
        // Retorna el botón de "Clientes" utilizando un selector por atributo data-value
        botonClientes: () => cy.get('a[data-value="Clientes"]', { timeout: DashboardPage._tiempoDeEsperaMaximo }),
    }   

    // ========== MÉTODOS FUNCIONALES ==========

    // Hace clic sobre el botón de "Crear", accediendo a su shadow DOM.
    // También evita que Cypress falle por errores no capturados en el navegador.
    clicBotonCrear() {
        // Ignora excepciones no capturadas que puedan ocurrir durante la ejecución
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        // Verifica que el elemento shadowRoot exista, accede al shadow DOM,
        // busca el botón y hace clic forzado en él si es visible.
        this.elementos.botonCrear()
            .should(($el) => {expect($el[0].shadowRoot).to.exist;})
            .shadow()
            .find('button')
            .should('be.visible')
            .click({ force: true });
    }

    // Hace clic sobre el botón de "Clientes"
    clicBotonClientes() {
        this.elementos.botonClientes().click();
    }
}

// Exporta una instancia de la clase DashboardPage para ser utilizada en otros archivos
export const dashboardPage = new DashboardPage();
