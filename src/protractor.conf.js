// Use this — interprets .ts as .js
require('ts-node').register({ project: './tsconfig.json' });
// Needed for cucumber html reporting
const reporter = require('cucumber-html-reporter');
exports.config = {
    // 'Custom' as we're using the protractor version of cucumber
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Require feature files
    specs: [
        // './features/**/*.feature', // accepts a glob
        './features/angular.feature',
    ],
    // Run chrome browser in headless mode, disable gpu as it
    // doesn't help in our case
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [' — headless', ' — disable-gpu'],
        },
    },
    cucumberOpts: {
        // This is where the results are stored
        format: ['json:../reports/results.json'],
        // Requires these files on test launch
        require: ['./steps/*.ts'],
        tags: true,
    },
    // When the tests are finished running
    afterLaunch() {
        // Configure reporting options
        const options = {
            columnLayout: 1,
            theme: 'bootstrap',
            jsonFile: './reports/results.json',
            output: './reports/cucumber_report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
        };
        // Generate the report
        reporter.generate(options);
     },
};