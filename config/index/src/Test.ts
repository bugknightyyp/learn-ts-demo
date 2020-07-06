// import zip = require("./ZipCodeValidator");
// import * as zip from "./ZipCodeValidator";
// import  moment from 'moment'
import * as zip  from './ZipCodeValidator'

//let date: moment.Moment = moment()
_.xor
// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validator = new zip.default();

// Show whether each string passed each validator
strings.forEach(s => {
  console.log(
    `"${s}" - ${validator.isAcceptable(s) ? "matches" : "does not match"}`
  );
});
