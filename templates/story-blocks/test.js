import 'phaser'
import { SIZE_WIN_WIDTH, SIZE_WIN_HEIGHT } from './scenes/Size.js';
import { CANVAS_FONT } from './scenes/Font.js';
import Menu from './gameobjects/menu/Menu.js';

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() {
        this.load.font(CANVAS_FONT, 'assets/fonts/jf-openhuninn-2.1.ttf');
    }

    create() {
        var menu = new Menu(this)
            .setPosition(SIZE_WIN_WIDTH * 0.7, SIZE_WIN_HEIGHT * 0.6)
            .layout()

        this.add.existing(menu)
    }

    update() { }
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: SIZE_WIN_WIDTH,
    height: SIZE_WIN_HEIGHT,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: Demo
};

var game = new Phaser.Game(config);