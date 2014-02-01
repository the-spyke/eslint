/**
 * @fileoverview Tests for no-obj-calls rule.
 * @author James Allardice
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslintTester = require("eslint-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

eslintTester.addRuleTest("lib/rules/no-obj-calls", {
    valid: [
        "var x = Math.random();"
    ],
    invalid: [
        { code: "var x = Math();", errors: [{ message: "'Math' is not a function.", type: "CallExpression"}] },
        { code: "var x = JSON();", errors: [{ message: "'JSON' is not a function.", type: "CallExpression"}] }
    ]
});
