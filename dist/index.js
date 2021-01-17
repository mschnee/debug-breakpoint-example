"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function math(a, b) {
    // convenient place to set breakpoints
    const aCopy = a;
    const bCopy = b;
    const addResult = aCopy + bCopy;
    const subResult = aCopy - bCopy;
    const multResult = aCopy * bCopy;
    let divResult = NaN;
    try {
        divResult = (aCopy / bCopy);
    }
    catch (e) {
        // noop
    }
    return {
        add: addResult,
        subtract: subResult,
        multiply: multResult,
        divide: divResult,
    };
}
exports.default = math;
//# sourceMappingURL=index.js.map