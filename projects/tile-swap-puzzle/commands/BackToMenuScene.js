import { SCENE_MENU } from '../scenes/const.js';

var BackToMenuScene = function (scene) {
    scene.backToMenuScene = function () {
        scene.scene.start(SCENE_MENU);
    }
}

export default BackToMenuScene;