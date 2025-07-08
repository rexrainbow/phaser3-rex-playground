import 'phaser'
import StoryBlock from './gameobjects/storyblock/StoryBlock.js';

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() {
        this.load.bitmapFont('gothic', 'assets/fonts/gothic.png', 'assets/fonts/gothic.xml');

        for (var i = 0; i < 2; i++) {
            this.load.image(`image${i}`, `assets/images/sample${i}.webp`);
            this.load.text(`story${i}`, `assets/storys/story${i}`);
        }

        this.load.atlas('icons', 'assets/icons/icons.png', 'assets/icons/icons.json');
    }

    create() {
        var index = 1;
        var key = `image${index}`
        var text = this.cache.text.get(`story${index}`);
        var storyBlock = new StoryBlock(this, key, text)
            .setPosition(1920 / 2, 1080 / 2)
            .setMinSize(1920 * 0.8, 1080 * 0.95)
            .layout();

        this.add.existing(storyBlock);
    }

    update() { }
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1920,
    height: 1080,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: Demo
};

var game = new Phaser.Game(config);