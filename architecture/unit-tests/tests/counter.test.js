import MyCounterElement from "../counter";

test('counter handles KeyDown event', () => {
    let counter = new MyCounterElement();
    counter.connectedCallback();
    counter.engine.increment = jest.fn();

    let fakeEvent = { code: "ArrowUp", preventDefault: () => {} };
    counter.handleKeydown(fakeEvent);

    expect(counter.engine.increment).toHaveBeenCalledTimes(1);
});