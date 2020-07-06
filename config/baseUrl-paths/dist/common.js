"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foo = exports.ENV = void 0;
exports.ENV = 'dev';
function foo(a) { return a; }
exports.foo = foo;
var person = /** @class */ (function () {
    function person(name, age) {
        this.name = 'name';
        this.age = 12;
    }
    return person;
}());
exports.default = person;
