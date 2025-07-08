import 'phaser'
import StoryDialog from './gameobjects/storyblock/StoryDialog.js';

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() {
        this.load.bitmapFont('gothic', 'assets/fonts/gothic.png', 'assets/fonts/gothic.xml');

        for (var i = 0; i < 2; i++) {
            this.load.image(`sample${i}`, `assets/images/sample${i}.webp`);
            this.load.text(`story${i}`, `assets/storys/story${i}`);
        }

        this.load.atlas('icons', 'assets/icons/icons.png', 'assets/icons/icons.json');
    }

    create() {
        var index = 1;
        var key = `sample${index}`
        var text = this.cache.text.get(`story${index}`);
        var storyDialog = new StoryDialog(this, key, text)
            .layout();
        this.add.existing(storyDialog);

        storyDialog.modalPromise();
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