import 'phaser'
import { SIZE_WIN_WIDTH, SIZE_WIN_HEIGHT } from './scenes/const.js';
import LoadLevelHeader from './loader/LoadLevelHeader.js';
import GalleryPanel from './gameobjects/gallery/GalleryPanel.js';

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() {
        this.load.bitmapFont('gothic', 'assets/fonts/gothic.png', 'assets/fonts/gothic.xml');

        var language = 'zh';
        for (var i = 0; i < 2; i++) {
            this.load.image(`sample${i}`, `assets/images/sample${i}.webp`);
            this.load.text(`story${i}`, `assets/storys/story${i}-${language}`);
        }

        this.load.atlas('icons', 'assets/icons/icons.png', 'assets/icons/icons.json');

        LoadLevelHeader(this);
    }

    create() {
        var items = [
            { id: 0, title: 'level0', image: 'sample0', contentKey: 'story0' },
            { id: 1, title: 'level1', image: 'sample1', contentKey: 'story1' },
        ]

        var panel = new GalleryPanel(this)
            .setPosition(SIZE_WIN_WIDTH / 2, SIZE_WIN_HEIGHT / 2)
            .setMinSize(SIZE_WIN_WIDTH * 0.9, SIZE_WIN_HEIGHT * 0.9)
            .layout();
        this.add.existing(panel);

        panel.setItems(items)
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