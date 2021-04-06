import { After, Given, Then } from '@cucumber/cucumber';
import { browser } from 'protractor';
import { expect } from 'chai';
import axe = require('@axe-core/webdriverjs');
import { ResourceLimits } from 'worker_threads';
import { stringify } from 'querystring';
import {GOOD, BETTER, BEST} from '../axe-config';

// Angular website
Given(/^Navigate to page (.*)$/, async function (url) {
    await browser.get(url);
});

// non-angular webite
Given(/^Navigate to non-angular page (.*)$/, {timeout: 60*1000 }, async function (url) {
    // protractor - were going to ignore angular promises
    browser.waitForAngularEnabled(false)
    await browser.get(url);
});

/**
* Accessibility step — https://github.com/dequelabs/axe-webdriverjs
*/
Then(/^The page should be accessible$/, {timeout: 60*1000 }, async function() {

    let results = await new axe(browser.driver)
        .configure(BEST).analyze();

    let summary:string = ""
    for (var i =0; i < results.violations.length; i++) {
        var item = results.violations[i]
        summary = summary.concat(
            "\nDescription: " + item.description + "\n" +
            "Severity: " + item.impact + "\n" +
            "Tip: " + item.help + "\n" +
            "URL: " + item.helpUrl + "\n" +
            "Number of Violations: " + item.nodes.length + "\n\n");
    }    

    expect(results.violations.length).to.be.equal(0, summary);
});

/** Cleanup */
After(function (scenario) {
    browser.waitForAngularEnabled(false);
});