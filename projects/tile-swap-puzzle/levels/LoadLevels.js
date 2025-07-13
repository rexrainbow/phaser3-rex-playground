import AwaitLoader from '../../../../phaser3-rex-notes/plugins/awaitloader.js';
import YAMLLoader from '../../../../phaser3-rex-notes/plugins/yamlloader.js';
import LoadCompletePromise from '../../../../phaser3-rex-notes/plugins/utils/loader/LoadCompletePromise.js';
import { DATA_KEY_CONFIGURATION, DATA_KEY_LEVELS } from '../scenes/DataKeys.js';

var LoadLevels = function (scene) {
    AwaitLoader.call(scene.load, async function (successCallback, failureCallback) {
        await LoadSequence(scene, DATA_KEY_CONFIGURATION);

        // Store configuration
        var configuration = scene.cache.json.get(DATA_KEY_CONFIGURATION);
        scene.registry.set(DATA_KEY_CONFIGURATION, configuration);

        // Store level data list
        var levels = configuration.levels.map((levelData) => levelData.data);

        var game = scene.sys.game;
        var completedLevels = game.localStorageData.completedLevels;
        for (var i in levels) {
            levels[i].completed = !!completedLevels.get(i);
        }

        scene.registry.set(DATA_KEY_LEVELS, levels);

        // Done
        successCallback();
    })
}

var LoadSequence = async function (scene, configurationKey) {
    var type = 'json';

    // 1. Load configuration
    let key = configurationKey;
    let url = 'assets/configuration.yml';
    var result = await LoadCompletePromise(
        YAMLLoader.call(scene.load, key, url),
        { key, type }
    )

    // 2. Load each level data
    var configuration = result.data;
    var levels = configuration.levels;
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
    var results = await Promise.all(promises);
    return configuration;
}

export default LoadLevels;