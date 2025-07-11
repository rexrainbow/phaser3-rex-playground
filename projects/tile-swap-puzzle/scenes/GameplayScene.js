import TopPanel from '../gameobjects/toppanel/TopPanel.js';
import RegisterCommands from '../commands/RegisterCommands.js';
import { SCENE_GAMEPLAY } from './const.js';
import { CANVAS_FONT, BITMAP_FONT } from './const.js';

class Gameplay extends Phaser.Scene {
    constructor() {
        super({
            key: SCENE_GAMEPLAY
        })
    }

    init(data) {
        if (!this.data.get('initialized')) {
            RegisterCommands(this);
            this.data.set('initialized', true);
        }
    }

    preload() {
        this.load.atlas('icons', 'assets/icons/icons.png', 'assets/icons/icons.json');
        this.load.bitmapFont(BITMAP_FONT, 'assets/fonts/gothic.png', 'assets/fonts/gothic.xml');
        this.load.font(CANVAS_FONT, 'assets/fonts/jf-openhuninn-2.1.ttf')

        var language = 'zh';
        for (var i = 0; i < 2; i++) {
            this.load.image(`sample${i}`, `assets/images/sample${i}.webp`);
            this.load.text(`story${i}`, `assets/storys/story${i}-${language}`);
        }

    }

    create() {
        this.setScore(undefined);
        var topPanel = new TopPanel(this).layout();
        this.add.existing(topPanel);

        this.restartGame('sample0');
    }

    update() { }
}
export default Gameplay;