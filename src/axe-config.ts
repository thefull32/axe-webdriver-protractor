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
    { id: 'area-alt', enabled: true },
    { id: 'aria-allowed-attr', enabled: true }
  ]
};

export var BETTER:object = {
    checks: [],
    rules: []
};

export var BEST:object = {
    checks: [],
    rules: []
};
