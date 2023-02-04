import 'phaser';
import { SCENE_APP } from './const.js';
import UIConfig from './UIConfig.js';
import CreateApp from '../app/CreateApp.js';

class App extends Phaser.Scene {
    constructor() {
        super({
            key: SCENE_APP
        })

    }

    preload() {
    }

    create() {
        var { width, height } = this.scale;
        var ui = CreateApp(this, UIConfig)
            .setMinSize(width, height)
            .setPosition(width / 2, height / 2)
            .layout()
    }

    update() { }
}
export default App;