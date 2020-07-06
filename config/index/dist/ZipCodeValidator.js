"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
exports.default = ZipCodeValidator;
// export = ZipCodeValidator;
