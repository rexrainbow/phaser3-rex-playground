import * as Comlink from 'comlink';

const api = {
    add: (a, b) => a + b,
    async slowTask() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return "done";
    }
};

Comlink.expose(api);