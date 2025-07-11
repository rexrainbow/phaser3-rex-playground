import { SCENE_MENU, SCENE_GAMEPLAY } from './const.js';

class MenuScene extends Phaser.Scene {
    constructor() {
        super({
            key: SCENE_MENU
        })
    }

    init() {
    }

    preload() {
    }

    create() {
        this.scene.start(SCENE_GAMEPLAY)
    }

    update() { }
}
export default MenuScene;