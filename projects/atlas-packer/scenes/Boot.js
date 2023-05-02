import phaser from 'phaser/src/phaser.js';
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
        this.scene.transition({
            target: SCENE_APP,
            duration: 500,

            onStart(fromScene, toScene, duration) {
                PixelationEffect(toScene, duration);
            }
        })
    }

    update() { }
}

export default Boot;