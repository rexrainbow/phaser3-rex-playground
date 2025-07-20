import { DATA_KEY_CONTINUE_LEVEL } from '../scenes/DataKeys.js';

var SetContinueLevel = function (scene, level) {
    var game = scene.sys.game;
    var commonData = game.localStorageData.common;
    commonData.set(DATA_KEY_CONTINUE_LEVEL, level);
}

export default SetContinueLevel;