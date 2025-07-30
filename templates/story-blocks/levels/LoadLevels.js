import AwaitLoader from '../../../../phaser3-rex-notes/plugins/awaitloader.js';
import YAMLLoader from '../../../../phaser3-rex-notes/plugins/yamlloader.js';
import LoadCompletePromise from '../../../../phaser3-rex-notes/plugins/utils/loader/LoadCompletePromise.js';
import { DATA_KEY_CONFIGURATION, DATA_KEY_LEVELS } from '../scenes/DataKeys.js';

const UUID = Phaser.Utils.String.UUID;
var LoadLevels = function (scene) {
    AwaitLoader.call(scene.load, async function (successCallback, failureCallback) {
        var configuration = scene.registry.get(DATA_KEY_CONFIGURATION);

        // Load levels
        var type = 'json';
        var levels = configuration.Levels;
        var promises = [];
        for (let i = 0, cnt = levels.length; i < cnt; i++) {
            let levelData = levels[i];
            let key = UUID();
            let url = levelData.url
            promises.push(
                LoadCompletePromise(
                    YAMLLoader.call(scene.load, key, url),
                    { key, type }
                )
                    .then(function (result) {
                        levels[i] = result.data;
                        // Release loaded data
                        scene.cache[type].remove(key);
                        return result;
                    })
            )
        }

        await Promise.all(promises);

        // Deep clone raw level data
        var levels = structuredClone(configuration.Levels);

        var game = scene.sys.game;
        var completedLevels = game.localStorageData.completedLevels;
        // Add index and complete flag
        for (let i in levels) {
            let levelData = levels[i];
            levelData.$level = i;
            levelData.$completed = !!completedLevels.get(i);
        }

        scene.registry.set(DATA_KEY_LEVELS, levels);

        // Done
        successCallback();
    })
}

export default LoadLevels;