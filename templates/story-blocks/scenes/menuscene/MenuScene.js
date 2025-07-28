import { SCENE_MENU, SCENE_GALLERY, SCENE_LEVEL } from '../SceneKeys.js';
import Menu from '../../gameobjects/menu/Menu.js';
import GetContinueLevel from '../../levels/GetContinueLevel.js';
import Play from '../gameplayscene/Play.js';
import GetWindowSize from '../utils/GetWindowSize.js';

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
        var windowSize = GetWindowSize(this);

        var menu = new Menu(this)
            .setPosition(windowSize.width * 0.7, windowSize.height * 0.6)
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