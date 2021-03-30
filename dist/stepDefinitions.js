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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcERlZmluaXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3N0ZXBzL3N0ZXBEZWZpbml0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGlEQUF3RDtBQUN4RCwyQ0FBcUM7QUFDckMsK0JBQThCO0FBQzlCLDZDQUE4QztBQUU5QyxrQkFBa0I7QUFDbEIsZ0JBQUssQ0FBQyx5QkFBeUIsRUFBRSxVQUFnQixHQUFHOztRQUNoRCxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxxQkFBcUI7QUFDckIsZ0JBQUssQ0FBQyxxQ0FBcUMsRUFBRSxVQUFnQixHQUFHOztRQUM1RCxxREFBcUQ7UUFDckQsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNwQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSDs7RUFFRTtBQUNGLGVBQUksQ0FBQyxpQ0FBaUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUMsSUFBSSxFQUFFLEVBQUU7O1FBQ3pELFFBQVE7UUFDUiw4Q0FBOEM7UUFDOUMsdURBQXVEO1FBQ3ZELElBQUksT0FBTyxHQUFHLE1BQU0sSUFBSSxHQUFHLENBQUMsb0JBQU8sQ0FBQyxNQUFNLENBQUM7YUFDdEMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxRQUFRLENBQUMsQ0FBQzthQUN6QyxPQUFPLEVBQUUsQ0FBQztRQUVmLGFBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUN6QyxDQUFDLEVBQ0QsbUNBQW1DLElBQUksQ0FBQyxTQUFTLENBQ2pELE9BQU8sQ0FBQyxVQUFVLEVBQ2xCLElBQUksRUFDSixDQUFDLENBQ0EsRUFBRSxDQUNOLENBQUM7SUFDTixDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsY0FBYztBQUNkLGdCQUFLLENBQUMsVUFBVSxRQUFRO0lBQ3BCLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDLENBQUMifQ==