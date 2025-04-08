import 'phaser'
import { SCENE_APP } from './const.js';

class App extends Phaser.Scene {
    constructor() {
        super({
            key: SCENE_APP
        })

    }

    preload() {
    }

    create() {
        this.add.text(300, 300, 'APP', {fontSize: 64})
    }

    update() { }
}
export default App;