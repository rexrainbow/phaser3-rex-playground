import AwaitLoader from '../../../../phaser3-rex-notes/plugins/awaitloader.js';
import YAMLLoader from '../../../../phaser3-rex-notes/plugins/yamlloader.js';
import LoadCompletePromise from '../../../../phaser3-rex-notes/plugins/utils/loader/LoadCompletePromise.js';
import { DATA_KEY_CONFIGURATION, DATA_KEY_LEVELS } from '../scenes/DataKeys.js';

var LoadLevels = function (scene) {
    AwaitLoader.call(scene.load, async function (successCallback, failureCallback) {
        var configuration = scene.registry.get(DATA_KEY_CONFIGURATION);

        // Load levels
        var type = 'json';
        var levels = configuration.Levels;
        var promises = [];
        for (var i = 0, cnt = levels.length; i < cnt; i++) {
            let levelData = levels[i];
            let key = levelData.id;
            let url = levelData.url
            promises.push(
                LoadCompletePromise(
                    YAMLLoader.call(scene.load, key, url),
                    { key, type }
                )
                    .then(function (result) {
                        levelData.data = result.data;
                        return result;
                    })
            )
        }

        await Promise.all(promises);

        // Store level data list
        var levelDataArray = levels.map((levelData) => levelData.data);

        var game = scene.sys.game;
        var completedLevels = game.localStorageData.completedLevels;
        for (var i in levelDataArray) {
            levelDataArray[i].completed = !!completedLevels.get(i);
        }

        scene.registry.set(DATA_KEY_LEVELS, levelDataArray);

        // Done
        successCallback();
    })
}

export default LoadLevels;