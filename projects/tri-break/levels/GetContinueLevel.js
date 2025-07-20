import { DATA_KEY_CONTINUE_LEVEL } from '../scenes/DataKeys.js';

var GetContinueLevel = function (scene) {
    var game = scene.sys.game;
    var commonData = game.localStorageData.common;
    var level = commonData.get(DATA_KEY_CONTINUE_LEVEL);
    return level;
}

export default GetContinueLevel;