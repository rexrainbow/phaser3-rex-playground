import GetCache from '../../../../phaser3-rex-notes/plugins/utils/system/GetCache.js';

var FreeTexture = function (scene, imageData) {
    var cache = GetCache(scene, 'image');

    if (!Array.isArray(imageData)) {
        cache.remove(imageData.key);
    } else {
        var imageDataArray = imageData;
        for (var i = 0, cnt = imageDataArray.length; i < cnt; i++) {
            cache.remove(imageDataArray[i].key);
        }
    }

}

export default FreeTexture;