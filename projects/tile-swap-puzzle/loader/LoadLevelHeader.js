import AwaitLoader from '../../../../phaser3-rex-notes/plugins/awaitloader.js';
import YAMLLoader from '../../../../phaser3-rex-notes/plugins/yamlloader.js';
import LoadCompletePromise from '../../../../phaser3-rex-notes/plugins/utils/loader/LoadCompletePromise.js';

var LoadLevelHeader = function (scene) {
    AwaitLoader.call(scene.load, async function (successCallback, failureCallback) {
        LoadSequence(scene);
        // Done
        successCallback();
    })
}

var LoadSequence = async function (scene) {
    var type = 'json';

    // 1. Load configuration
    let key = 'configuration';
    let url = 'assets/configuration.yml';
    var result = await LoadCompletePromise(
        YAMLLoader.call(scene.load, key, url),
        { key, type }
    )

    // 2. Load each level data
    var root = result.data;
    var levels = root.levels;
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
    console.log(results);

    // Lazy loading?
    // 3. Load image of each level
    // promises.length = 0;
    // type = 'image';
    // for (var i = 0, cnt = results.length; i < cnt; i++) {
    //     var levelData = results[i].data;
    //     key = levelData.image;
    //     url = levelData['image-url'];
    //     promises.push(
    //         LoadCompletePromise(
    //             scene,
    //             { key, type, url }
    //         )
    //     )
    // }
    // var results = await Promise.all(promises);
    // console.log(results);

    console.log(root);
    return root;
}

export default LoadLevelHeader;