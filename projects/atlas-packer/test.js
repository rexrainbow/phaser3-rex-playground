import 'phaser';
import CreateApp from './app/CreateApp.js';


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
        var config = {
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

                    label: {
                        background: {
                            strokeColor: COLOR_LIGHT,
                        },
                        space: {
                            left: 5, right: 5, top: 5, bottom: 5,
                            icon: 5,
                        }
                    }
                }
            },

            content: {
                backgroundColor: COLOR_PRIMARY,
                imageBackgroundColor: 0x555555
            },
        };

        var ui = CreateApp(this, config)
            .setMinSize(800, 600)
            .setPosition(400, 300)
            .layout()
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