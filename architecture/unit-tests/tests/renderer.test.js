import CountingEngine from "../counting-engine";
import Renderer from "../renderer";

describe('renderer renders things correctly', () => {
    let sandbox = document.createElement('div');
    let renderer = new Renderer(sandbox);
    let engine = new CountingEngine(5);
    renderer.render(engine);
    test('counter', () => {
        let span = sandbox.querySelector('span');

        console.log(span.innerText);
        expect(span.innerText).toBe(5);
    });

    test('increment button', () => {
        let button = sandbox.querySelector('button#increment-button');
        expect(button.innerText).toBe('▲');
    });
});