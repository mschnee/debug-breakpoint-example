"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = require("./index");
describe('Maths', () => {
    it('Simply adds simple values', () => {
        const results = index_1.default(3, 2);
        chai_1.expect(results.add).to.equal(5);
    });
    it('Simply adds simple values', () => {
        debugger;
        const results = index_1.default(3, 2);
        chai_1.expect(results.subtract).to.equal(1);
    });
    it('Simply multiplies simple values', () => {
        const results = index_1.default(3, 2);
        chai_1.expect(results.multiply).to.equal(6);
    });
});
//# sourceMappingURL=index.unit.js.map