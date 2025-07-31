import DataManager from '../../../../../phaser3-rex-notes/plugins/storage/localstorage/data/DataManager.js';
import { DATA_KEY_CONTINUE_LEVEL, DATA_KEY_LOCATE } from '../DataKeys.js';
import DetectLocate from './DetectLocate.js';

var InstallLocalStorageData = function (scene) {
    var game = scene.sys.game;
    game.localStorageData = {};

    var defaultData = {};
    defaultData[DATA_KEY_CONTINUE_LEVEL] = 0;
    defaultData[DATA_KEY_LOCATE] = DetectLocate();

    game.localStorageData.common = new DataManager(game, {
        name: 'Common',
        default: defaultData
    });

    game.localStorageData.completedLevels = new DataManager(game, {
        name: 'CompletedLevels'
    });

}

export default InstallLocalStorageData;