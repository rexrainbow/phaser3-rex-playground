import 'phaser';
import { SCENE_BOOT, SCENE_APP } from './const.js';

class Boot extends Phaser.Scene {
    constructor() {
        super({
            key: SCENE_BOOT
        })

    }

    preload() {
    }

    create() {
        this.scene.start(SCENE_APP);
    }

    update() { }
}
export default Boot;