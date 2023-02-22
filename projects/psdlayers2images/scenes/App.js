import 'phaser'
import { SCENE_APP } from './const.js';
import UIStyle from './UIStyle/UIStyle.js';
import { FONTFAMILY } from './UIStyle/const.js';
import CreateApp from '../app/CreateApp.js';
import WebFontLoader from '../../../../phaser3-rex-notes/plugins/webfontloader.js';

class App extends Phaser.Scene {
    constructor() {
        super({
            key: SCENE_APP
        })

    }

    preload() {
        WebFontLoader.call(this.load, {
            google: {
                families: [FONTFAMILY]
            }
        });
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