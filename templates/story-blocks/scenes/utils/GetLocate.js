import { DATA_KEY_LOCATE } from '../DataKeys.js';

var GetLocate = function (scene) {
    var game = scene.sys.game;
    var commonData = game.localStorageData.common;
    var locate = commonData.get(DATA_KEY_LOCATE);
    return locate;
}

export default GetLocate;