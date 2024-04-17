"use strict";

const importsRule = require("./imports");
const exportsRule = require("./exports");

module.exports = {
  meta: {
    name: "@fudgi-packages/eslint-plugin-simple-import-sort",
    version: "%VERSION%",
  },
  rules: {
    imports: importsRule,
    exports: exportsRule,
  },
};
