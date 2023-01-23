import 'phaser';
import Model from './model/Model.js';
import CreateTopPanel from './gameobjects/builders/CreateTopPanel.js';


const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;

class TestScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'test'
        })

    }

    preload() {

    }

    create() {
        var model = new Model();

        var ui = CreateUI(this, model)
            .setMinSize(800, 600)
            .setPosition(400, 300)
            .layout()
    }

    update() { }
}

var CreateUI = function (scene, model) {
    config = {
        leftSide: {
            width: 250,

            imageList: {
                table: {
                    cellHeight: 80
                },

                slider: {
                    track: { width: 20, radius: 10, color: COLOR_DARK },
                    thumb: { radius: 13, color: COLOR_LIGHT }
                },
            }
        },

        content: {
            backgroundColor: COLOR_PRIMARY,
            imageBackgroundColor: 0x555555
        },
    }

    config.model = model;
    return CreateTopPanel(scene, config);
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