/**
 * @fileoverview Tests for new-parens rule.
 * @author Ilya Volodin
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslintTester = require("eslint-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

eslintTester.addRuleTest("lib/rules/new-parens", {
    valid: [
        "var a = new Date();",
        "var a = new Date(function() {});"
    ],
    invalid: [
        { code: "var a = new Date;", errors: [{ message: "Missing '()' invoking a constructor", type: "NewExpression"}] }
    ]
});
