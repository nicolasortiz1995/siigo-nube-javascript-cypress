const { defineConfig } = require('cypress');
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const fs = require("fs");
const path = require("path");

require("dotenv").config();

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  on("before:run", () => {
    const screenshotsFolder = config.screenshotsFolder;
    const videosFolder = config.videosFolder;

    if (fs.existsSync(screenshotsFolder)) {
      fs.rmdirSync(screenshotsFolder, { recursive: true });
    }

    if (fs.existsSync(videosFolder)) {
      fs.rmdirSync(videosFolder, { recursive: true });
    }

    const mochawesomeReportDir = path.join(config.projectRoot, "cypress", "report");
    if (fs.existsSync(mochawesomeReportDir)) {
      fs.rmdirSync(mochawesomeReportDir, { recursive: true });
    }
  });

  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    includeShadowDom: true, // Agregamos esta opción para incluir el Shadow DOM
    specPattern: 'cypress/e2e/features/**/*.feature',
    chromeWebSecurity: false,
    video: true,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    supportFile: false,
    sourceMap: false,
    env: {
      URL_SIIGO_NUBE: process.env.URL_SIIGO_NUBE,
      QA_USER: process.env.QA_USER,
      QA_PASSWORD: process.env.QA_PASSWORD,
    },
    reporter: 'mochawesome',
    reporterOptions: {
      charts: true, 
      overwrite: false, 
      html: true, 
      json: true, 
      reportDir: 'cypress/report/mochawesome-report', 
      reportFilename: 'output', 
      inlineAssets: true, 
      embeddedScreenshots: true, 
    },
  },
});