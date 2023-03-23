import GetCache from '../../../../phaser3-rex-notes/plugins/utils/system/GetCache.js';

var FreeTexture = function (scene, imageData) {
    var cache = GetCache(scene, 'image');

    if (!Array.isArray(imageData)) {
        var key = imageData.key;
        if (cache.exists(key)) {
            cache.remove(key);
        }
    } else {
        var imageDataArray = imageData;
        for (var i = 0, cnt = imageDataArray.length; i < cnt; i++) {
            var key = imageDataArray[i].key;
            if (cache.exists(key)) {
                cache.remove(key);
            }
        }
    }

}

export default FreeTexture;