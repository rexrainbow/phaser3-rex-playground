import phaser from 'phaser/src/phaser.js';
import { SCENE_APP } from './const.js';
import UIStyle from './UIStyle/UIStyle.js';;
import CreateApp from '../app/CreateApp.js';

class App extends Phaser.Scene {
    constructor() {
        super({
            key: SCENE_APP
        })

    }

    preload() {
        this.load.atlas('sprites', 'assets/images/sprites.png', 'assets/images/sprites.json');
    }

    create() {
        var { width, height } = this.scale;
        var ui = CreateApp(this, UIStyle)
            .setMinSize(width, height)
            .setPosition(width / 2, height / 2)
            .layout()

        ui.broadcastEvent('build.complete', ui);
    }

    update() { }
}
export default App;