import phaser from '../lib/phaser.js';
import { SCENE_BOOT, SCENE_APP } from './const.js';
import PixelationEffect from '../effects/PixelationEffect.js';

class Boot extends Phaser.Scene {
    constructor() {
        super({
            key: SCENE_BOOT
        })

    }

    preload() {
    }

    create() {
        var nextScene = this.scene.get(SCENE_APP);
        nextScene.events.once('transitionstart', function (fromScene, duration) {
            PixelationEffect(nextScene, duration);
        });

        this.scene.transition({
            target: SCENE_APP,
            duration: 500
        })
    }

    update() { }
}

export default Boot;