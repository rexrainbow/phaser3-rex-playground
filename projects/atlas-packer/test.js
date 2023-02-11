import phaser from './lib/phaser.js';
import UIConfig from './scenes/UIConfig.js';
import ImageDataDialog from './gameobjects/imagedatadialog/ImageDataDialog.js';

class TestScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'test'
        })

    }

    preload() {

    }

    create() {
        var dialog = new ImageDataDialog(this, {
            x: 400, y: 300,
            width: 200, height: 200,

            styles: UIConfig.imageDataDialog
        })
        this.add.existing(dialog);

        dialog.layout()

        dialog.setBindingTarget({
            name: 'aaa',
            x: 0, y: 0, width: 100, height: 100,
        })
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