import CountingEngine from "../counting-engine";

test('Counting engine initalises properly', () => {
    let engine = new CountingEngine(5);
    expect(engine.value).toBe(5);
    expect(engine.initialValue).toBe(5);
});