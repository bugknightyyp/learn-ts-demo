"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import zip = require("./ZipCodeValidator");
// import * as zip from "./ZipCodeValidator";
// import  moment from 'moment'
const zip = __importStar(require("./ZipCodeValidator"));
//let date: moment.Moment = moment()
_.xor;
// Some samples to try
let strings = ["Hello", "98052", "101"];
// Validators to use
let validator = new zip.default();
// Show whether each string passed each validator
strings.forEach(s => {
    console.log(`"${s}" - ${validator.isAcceptable(s) ? "matches" : "does not match"}`);
});
