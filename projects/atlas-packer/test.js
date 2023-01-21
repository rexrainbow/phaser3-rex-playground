import 'phaser';
import ContainerPanel from './gameobjects/containerpanel/ContainerPanel.js';
import TopPanel from './gameobjects/toppanel/TopPanel.js';

class TestScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'test'
        })

    }

    preload() {

    }

    create() {
        var ui = new TopPanel(this, {
            x: 400, y: 300,
            width: 800, height: 600,

            leftSide: {
                width: 200,
            }
        })
        this.add.existing(ui);

        ui.layout()
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