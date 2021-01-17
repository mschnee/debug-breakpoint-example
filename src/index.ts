export interface MathResults {
    add: number;
    subtract: number;
    multiply: number;
    divide: number;
}

export default function math(a: number, b: number): MathResults {
    // convenient place to set breakpoints
    const aCopy = a;
    const bCopy = b;

    const addResult = aCopy + bCopy;
    const subResult = aCopy - bCopy;
    const multResult= aCopy * bCopy;
    let divResult = NaN;
    try {
        divResult = (aCopy / bCopy);
    } catch (e) {
        // noop
    }
    return {
        add: addResult,
        subtract: subResult,
        multiply: multResult,
        divide: divResult,
    }
}