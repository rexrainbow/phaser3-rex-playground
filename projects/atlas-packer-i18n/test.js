import phaser from './lib/phaser.js';

class TestScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'test'
        })

    }

    preload() {

    }

    create() {
    }

    update() { }
}

var config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    dom: {
        createContainer: true
    },
    plugins: {},
    scene: [TestScene],
};

var game = new Phaser.Game(config);