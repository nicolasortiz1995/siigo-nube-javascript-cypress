# Cypress Test Automation - SIIGO NUBE

## Descripción

Este proyecto contiene la automatización de pruebas E2E utilizando Cypress y Cucumber para los flujos críticos y transversales del sistema SIIGO NUBE. Está orientado a garantizar la calidad del sistema mediante pruebas automatizadas mantenibles, legibles y ejecutables en pipelines CI/CD.

## Tecnologías Utilizadas

- [Cypress](https://www.cypress.io/) - Framework de automatización para aplicaciones web.
- [Cucumber](https://cucumber.io/) - Permite escribir pruebas en lenguaje natural (Gherkin).
- [Mochawesome](https://github.com/adamgruber/mochawesome) - Generador de reportes en HTML y JSON.
- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Lenguaje de programación principal del proyecto.

## Estructura del Proyecto

```
cypress/
├── downloads/
├── e2e/
│   ├── features/
│   │   ├── flujos-criticos/
│   │   │   └── FCE2E_CreacionDeCliente.feature
│   │   └── flujos-transversales/
│   │       └── FT_IniciarSesion.feature
│   ├── pages/
│   │   ├── CrearUnTerceroPage.js
│   │   ├── DashboardPage.js
│   │   ├── InicioDeSesionPage.js
│   │   └── PerfilCreadoPage.js
│   └── step_definitions/
│       ├── flujos-criticos/
│       │   └── FCE2E_CreacionDeCliente.js
│       └── flujos-transversales/
│           └── FT_IniciarSesion.js
├── report/
├── support/
│   ├── utils/
│   │   └── GeneradorDatos.js
│   ├── commands.js
│   └── e2e.js
├── videos/

Archivos importantes:
- .env
- .gitignore
- package.json
- cypress.config.js
- .cypress-cucumber-preprocessorrc.json
- README.md
```

## Configuración y Dependencias

Para trabajar con este repositorio, asegúrate de tener instalados:

- Node.js >= 14
- npm >= 6
- Cypress >= 12

Instala las dependencias con:

```bash
npm install
```

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/siigo-nube-javascript-cypress.git
```

2. Accede al proyecto:

```bash
cd siigo-nube-javascript-cypress
```

3. Instala las dependencias:

```bash
npm install
```

## Ejecución de Pruebas

### Apertura del Test Runner:

```bash
npm run cypress:open
npm run cypress:runner-chrome
```

### Ejecuciones por etiqueta:

```bash
npm run cypress:run-todos
npm run cypress:run-inicio-sesion
npm run cypress:run-flujo-critico
npm run cypress:run-happy-path
npm run cypress:run-e2e
```

### Comando de Merge de Reportes:

```bash
npm run merge-reports
```

## Reportes

Este proyecto utiliza **Mochawesome** para generar reportes automáticos en formato HTML y JSON.

- Los reportes se encuentran en `cypress/report/`
- Los archivos `.json` son combinados con el comando `merge-reports`
- El reporte final puede abrirse desde `mochawesome-report.html`

## Contribuciones

Las contribuciones son bienvenidas. Puedes abrir un issue o crear un pull request con tus mejoras. Por favor, sigue las buenas prácticas de desarrollo y documentación.

## Desarrollado Por

Este proyecto fue desarrollado por [Nicolas Ortiz](https://www.linkedin.com/in/ortiznicolas/).

### Información de Contacto:
- **LinkedIn**: [https://www.linkedin.com/in/ortiznicolas/](https://www.linkedin.com/in/ortiznicolas/)
- **Correo Electrónico**: vinico0911@hotmail.com
- **Móvil**: +573202978837