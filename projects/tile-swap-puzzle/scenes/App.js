import TopPanel from '../gameobjects/toppanel/TopPanel.js';
import RegisterCommands from '../commands/RegisterCommands.js';
import { EVT_RESTART_GAME } from '../commands/const.js';

class App extends Phaser.Scene {
    constructor() {
        super({
            key: 'app'
        })

    }

    preload() {
        this.load.bitmapFont('gothic', 'assets/fonts/gothic.png', 'assets/fonts/gothic.xml');
        this.load.image('check', 'assets/images/check.png');
        this.load.image('restart', 'assets/images/restart.png');
        this.load.image('fullscreen-on', 'assets/images/fullscreen-on.png');
        this.load.image('fullscreen-off', 'assets/images/fullscreen-off.png');

        this.load.image('image', 'https://rapi.pixai.art/img/media/594544831722291264/orig');

    }

    create() {
        RegisterCommands(this);

        this.data.set('score', undefined);

        var topPanel = new TopPanel(this).layout();
        this.add.existing(topPanel);

        this.events.emit(EVT_RESTART_GAME, 'image');
    }

    update() { }
}
export default App;