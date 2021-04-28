export default class CountingEngine {    
    constructor(count) {
        this.initialValue = parseInt(count) || 0;
        this.value = this.initialValue;
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