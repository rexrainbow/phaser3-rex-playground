import DataManager from '../../../../../phaser3-rex-notes/plugins/storage/localstorage/data/DataManager.js';

var InstallLocalStorageData = function (scene) {
    var game = scene.sys.game;
    game.localStorageData = {};

    game.localStorageData.common = new DataManager(game, {
        name: 'Common',
        default: {
            'continue-level': 0,
        }
    });

    game.localStorageData.completedLevels = new DataManager(game, {
        name: 'CompletedLevels'
    });

}

export default InstallLocalStorageData;