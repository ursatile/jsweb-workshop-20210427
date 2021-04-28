import CountingEngine from "../counting-engine";

describe('Initialising counting engine', () => {
    describe('valid values', () => {
        const cases = [0, 1, 2, 25];
        test.each(cases)('when initial value is %p', v => {
            let engine = new CountingEngine(v);
            expect(engine.value).toBe(v);
            expect(engine.initialValue).toBe(v);
        });
    });
    describe('invalid values', () => {
        const cases = [-5, "foo", new Date(), {}, null];
        test.each(cases)('when initial value is %p', v => {
            let engine = new CountingEngine(v);
            expect(engine.value).toBe(0);
            expect(engine.initialValue).toBe(0);
        });
    });
});