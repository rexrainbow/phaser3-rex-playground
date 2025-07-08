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

        this.load.image('image', 'assets/images/sample.webp');

    }

    create() {
        this.setScore(undefined);
        var topPanel = new TopPanel(this).layout();
        this.add.existing(topPanel);

        this.restartGame('image');
    }

    update() { }
}
export default App;