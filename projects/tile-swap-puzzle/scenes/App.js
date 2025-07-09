import TopPanel from '../gameobjects/toppanel/TopPanel.js';
import RegisterCommands from '../commands/RegisterCommands.js';

class App extends Phaser.Scene {
    constructor() {
        super({
            key: 'app'
        })
    }

    init() {
        RegisterCommands(this);
    }

    preload() {
        this.load.atlas('icons', 'assets/icons/icons.png', 'assets/icons/icons.json');
        this.load.bitmapFont('gothic', 'assets/fonts/gothic.png', 'assets/fonts/gothic.xml');

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
export default App;