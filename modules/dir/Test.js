"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import zip = require("./ZipCodeValidator");
// import * as zip from "./ZipCodeValidator";
var ZipCodeValidator_1 = require("./ZipCodeValidator");
var moment_1 = require("moment");
var date = moment_1.default();
// Some samples to try
var strings = ["Hello", "98052", "101"];
// Validators to use
var validator = new ZipCodeValidator_1.default();
// Show whether each string passed each validator
strings.forEach(function (s) {
    console.log("\"" + s + "\" - " + (validator.isAcceptable(s) ? "matches" : "does not match"));
});
