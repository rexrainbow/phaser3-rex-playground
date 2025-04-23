import * as Comlink from 'comlink';

const worker = new Worker('./worker.js');
const api = Comlink.wrap(worker);

(async () => {
    console.log(await api.add(2, 3));       // 輸出：5
    console.log(await api.slowTask());      // 輸出："done"
})();