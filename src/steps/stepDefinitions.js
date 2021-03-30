"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
const chai_1 = require("chai");
const axe = require("@axe-core/webdriverjs");
// Angular website
cucumber_1.Given(/^Navigate to page (.*)$/, function (url) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get(url);
    });
});
// non-angular webite
cucumber_1.Given(/^Navigate to non-angular page (.*)$/, function (url) {
    return __awaiter(this, void 0, void 0, function* () {
        // protractor - were going to ignore angular promises
        protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get(url);
    });
});
/**
* Accessibility step — https://github.com/dequelabs/axe-webdriverjs
*/
cucumber_1.Then(/^The page should be accessible$/, { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        // Tags:
        // wcag2a, wcag2aa, wcag21a, wcag21aa, wcag***
        // ACT, section508, section508.*.*, experimental, cat.*
        let results = yield new axe(protractor_1.browser.driver)
            .withTags(['wcag21aa', 'wcag21a', 'wcag2a'])
            .analyze();
        chai_1.expect(results.violations.length).to.be.equal(0, `Accessibility Violations Found: ${JSON.stringify(results.violations, null, 2)}`);
    });
});
/** Cleanup */
cucumber_1.After(function (scenario) {
    protractor_1.browser.waitForAngularEnabled(false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcERlZmluaXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RlcERlZmluaXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsaURBQXdEO0FBQ3hELDJDQUFxQztBQUNyQywrQkFBOEI7QUFDOUIsNkNBQThDO0FBRTlDLGtCQUFrQjtBQUNsQixnQkFBSyxDQUFDLHlCQUF5QixFQUFFLFVBQWdCLEdBQUc7O1FBQ2hELE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILHFCQUFxQjtBQUNyQixnQkFBSyxDQUFDLHFDQUFxQyxFQUFFLFVBQWdCLEdBQUc7O1FBQzVELHFEQUFxRDtRQUNyRCxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3BDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVIOztFQUVFO0FBQ0YsZUFBSSxDQUFDLGlDQUFpQyxFQUFFLEVBQUMsT0FBTyxFQUFFLEVBQUUsR0FBQyxJQUFJLEVBQUUsRUFBRTs7UUFDekQsUUFBUTtRQUNSLDhDQUE4QztRQUM5Qyx1REFBdUQ7UUFDdkQsSUFBSSxPQUFPLEdBQUcsTUFBTSxJQUFJLEdBQUcsQ0FBQyxvQkFBTyxDQUFDLE1BQU0sQ0FBQzthQUN0QyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3pDLE9BQU8sRUFBRSxDQUFDO1FBRWYsYUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQ3pDLENBQUMsRUFDRCxtQ0FBbUMsSUFBSSxDQUFDLFNBQVMsQ0FDakQsT0FBTyxDQUFDLFVBQVUsRUFDbEIsSUFBSSxFQUNKLENBQUMsQ0FDQSxFQUFFLENBQ04sQ0FBQztJQUNOLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxjQUFjO0FBQ2QsZ0JBQUssQ0FBQyxVQUFVLFFBQVE7SUFDcEIsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUMsQ0FBQyJ9