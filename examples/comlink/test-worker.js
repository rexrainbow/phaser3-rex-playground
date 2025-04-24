// import * as Comlink from 'comlink'
importScripts("./assets/comlink.js");

(() => {
    const obj = {
        counter: 0,
        inc() {
            // debugger
            this.counter++;
        },

        processor(data) {
            return { a: data.a + 10, b: data.b + 20 };
        }
    };

    Comlink.expose(obj);
})();