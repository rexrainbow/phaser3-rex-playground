import 'phaser'
import { SIZE_WIN_WIDTH, SIZE_WIN_HEIGHT } from './scenes/const.js';
import { DATA_KEY_LEVELS } from './scenes/const.js';
import LoadLevels from './levels/LoadLevels.js';
import GalleryPanel from './gameobjects/gallery/GalleryPanel.js';

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() {
        this.load.bitmapFont('gothic', 'assets/fonts/gothic.png', 'assets/fonts/gothic.xml');
        this.load.atlas('icons', 'assets/icons/icons.png', 'assets/icons/icons.json');

        LoadLevels(this);
    }

    create() {
        var levels = this.registry.get(DATA_KEY_LEVELS);
        console.log(levels);

        var panel = new GalleryPanel(this)
            .setPosition(SIZE_WIN_WIDTH / 2, SIZE_WIN_HEIGHT / 2)
            .setMinSize(SIZE_WIN_WIDTH * 0.9, SIZE_WIN_HEIGHT * 0.9)
            .layout();
        this.add.existing(panel);

        panel.setItems(levels)
        //.drawBounds(this.add.graphics(), 0xff0000);
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