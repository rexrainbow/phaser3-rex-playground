import AwaitLoader from '../../../../phaser3-rex-notes/plugins/awaitloader.js';
import YAMLLoader from '../../../../phaser3-rex-notes/plugins/yamlloader.js';
import LoadCompletePromise from '../../../../phaser3-rex-notes/plugins/utils/loader/LoadCompletePromise.js';

var LoadAssets = function (scene) {
    AwaitLoader.call(scene.load, async function (successCallback, failureCallback) {
        LoadSequence(scene);
        // Done
        successCallback();
    })
}

var LoadSequence = async function (scene) {
    var key, url, type = 'yaml';

    // 1. Load configuration
    key = 'configuration';
    url = 'assets/configuration.yml';
    var result = await LoadCompletePromise(
        YAMLLoader.call(scene.load, key, url),
        { key, type }
    )
    console.log(result)

    // 2. Load each level data
    var data = result.data;
    var levels = data.levels;
    var promises = [];
    for (var i = 0, cnt = levels.length; i < cnt; i++) {
        var levelData = levels[i];
        key = levelData.id;
        url = levelData.url
        promises.push(
            LoadCompletePromise(
                YAMLLoader.call(scene.load, key, url),
                { key, type }
            )
        )
    }
    var results = await Promise.all(promises);
    console.log(results);

    // 3. Load image of each level
    promises.length = 0;
    type = 'image';
    for (var i = 0, cnt = results.length; i < cnt; i++) {
        var levelData = results[i].data;
        key = levelData.image;
        url = levelData['image-url'];
        promises.push(
            LoadCompletePromise(
                scene,
                { key, type, url }
            )
        )
    }
    var results = await Promise.all(promises);
    console.log(results);
}

export default LoadAssets;