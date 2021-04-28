export default class CountingEngine {    
    constructor(count) {
        let value = parseInt(count) || 0;
        if (value < 0) value = 0;
        this.initialValue = value;
        this.value = value;
    }
    increment() {
        this.value++;
    }
    decrement() {
        this.value--;
    }    
    reset() {
        this.value = this.initialValue;
    }
}