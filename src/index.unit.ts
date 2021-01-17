import { expect } from 'chai';
import mathFn from './index';

describe('Maths', () => {
    it('Simply adds simple values', () => {
        const results = mathFn(3, 2);
        expect(results.add).to.equal(5);
    });

    it('Simply adds simple values', () => {
        debugger
        const results = mathFn(3, 2);
        expect(results.subtract).to.equal(1);
    });

    it('Simply multiplies simple values', () => {
        const results = mathFn(3, 2);
        expect(results.multiply).to.equal(6);
    });
})