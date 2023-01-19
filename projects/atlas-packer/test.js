import 'phaser';
import ContainerPanel from './gameobjects/containerpanel/ContainerPanel.js';

class TestScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'test'
        })

    }

    preload() {

    }

    create() {
        var container = new ContainerPanel(this, {
            x: 400, y: 300,
            width: 800, height: 600
        })
        this.add.existing(container);

        container.layout()
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