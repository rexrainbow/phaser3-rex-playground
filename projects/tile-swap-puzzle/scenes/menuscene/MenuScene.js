import { SIZE_WIN_WIDTH, SIZE_WIN_HEIGHT } from '../const.js';
import { SCENE_MENU } from '../SceneKeys.js';
import Menu from '../../gameobjects/menu/Menu.js';

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
        var menu = new Menu(this)
            .setPosition(SIZE_WIN_WIDTH * 0.7, SIZE_WIN_HEIGHT * 0.6)
            .layout()
    }

    update() { }
}
export default MenuScene;