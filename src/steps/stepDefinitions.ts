import { After, Given, Then } from '@cucumber/cucumber';
import { browser } from 'protractor';
import { expect } from 'chai';
import axe = require('@axe-core/webdriverjs');

// Angular website
Given(/^Navigate to page (.*)$/, async function (url) {
    await browser.get(url);
});

// non-angular webite
Given(/^Navigate to non-angular page (.*)$/, async function (url) {
    // protractor - were going to ignore angular promises
    browser.waitForAngularEnabled(false)
    await browser.get(url);
});

/**
* Accessibility step — https://github.com/dequelabs/axe-webdriverjs
*/
Then(/^The page should be accessible$/, {timeout: 60*1000 }, async function() {
    // Tags:
    // wcag2a, wcag2aa, wcag21a, wcag21aa, wcag***
    // ACT, section508, section508.*.*, experimental, cat.*
    let results = await new axe(browser.driver)
        .withTags(['wcag21aa','wcag21a','wcag2a'])
        .analyze();

    expect(results.violations.length).to.be.equal(
        0,
        `Accessibility Violations Found: ${JSON.stringify(
        results.violations,
        null,
        2
        )}`
    );
});

/** Cleanup */
After(function (scenario) {
    browser.waitForAngularEnabled(false);
});