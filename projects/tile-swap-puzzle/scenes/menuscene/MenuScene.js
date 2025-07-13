import { SIZE_WIN_WIDTH, SIZE_WIN_HEIGHT } from '../const.js';
import { SCENE_MENU, SCENE_GALLERY, SCENE_LEVEL } from '../SceneKeys.js';
import Menu from '../../gameobjects/menu/Menu.js';
import GetContinueLevel from '../../levels/GetContinueLevel.js';
import Play from '../gameplayscene/Play.js';

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

        menu
            .on('button.click', function (button, index, pointer, event) {
                switch (button.name) {
                    case 'play':
                        var level = GetContinueLevel(this);
                        Play(this, level);
                        break;
                    case 'level':
                        this.scene.start(SCENE_LEVEL);
                        break;
                    case 'gallery':
                        this.scene.start(SCENE_GALLERY);
                        break;
                }
                console.log(button.name)
            }, this)
    }

    update() { }
}
export default MenuScene;