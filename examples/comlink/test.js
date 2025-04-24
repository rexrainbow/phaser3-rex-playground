import * as Phaser from 'phaser';

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() {
        this.load.script('comlink', './assets/comlink.js');
    }

    create() {
        var filePath = './examples/comlink/test-worker.js';
        (async () => {
            var worker = new Worker(filePath);
            var obj = Comlink.wrap(worker);
            console.log('test')
            console.log(`Counter: ${await obj.counter}`);
            await obj.inc();
            console.log(`Counter: ${await obj.counter}`);

            var result = await obj.processor({ a: 10, b: 20 });
            console.log(result);
        })();
    }

    update() { }
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: Demo,
    plugins: {
    }
};

var game = new Phaser.Game(config);