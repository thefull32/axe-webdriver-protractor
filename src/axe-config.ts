/* 
AxeBuilder configurations
We can define Morningstar best practices
configurationOptions

Documentation
https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axecon
https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md

axe.configure({
  branding: {
    brand: String,
    application: String
  },
  reporter: 'option' | Function,
  checks: [Object],
  rules: [Object],
  standards: Object,
  locale: Object,
  axeVersion: String,
  disableOtherRules: Boolean,
  noHtml: Boolean
});

*/

export var GOOD:object = {
  rules: [
    { id: 'area-alt', enabled: true }
  ], 
  disableOtherRules: true
};

export var BETTER:object = {
  rules: [
    { id: 'area-alt', enabled: false },
    { id: 'aria-allowed-attr', enabled: false },
    { id: 'listitem', enabled: false},
    { id: 'garrett-custom-rule', tags: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']}
  ], 
  disableOtherRules: true
};

export var BEST:object = {
  rules: [
    { id: 'area-alt', enabled: true },
    { id: 'aria-allowed-attr', enabled: true },
    { id: 'listitem', enabled: true},
    { id: 'color-contrast', enabled: true},
    { id: 'aria-allowed-role', enabled: true},
    { id: 'landmark-main-is-top-level', enabled: true},
    { id: 'landmark-no-duplicate-main', enabled: true},
    { id: 'landmark-unique', enabled: true},
    { id: 'page-has-heading-one', enabled: true},
    { id: 'region', enabled: true}
  ], 
  disableOtherRules: true
};
