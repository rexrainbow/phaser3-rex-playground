import GetCache from '../../../../phaser3-rex-notes/plugins/utils/system/GetCache.js';

var FreeTexture = function (scene, imageDataArray) {
    if (!Array.isArray(imageDataArray)) {
        imageDataArray = [imageDataArray]
    }

    var cache = GetCache(scene, 'image');
    for (var i = 0, cnt = imageDataArray.length; i < cnt; i++) {
        var imageData = imageDataArray[i],
            key = imageData.key,
            frameName = imageData.frame;
        if (!frameName) {
            if (cache.exists(key)) {
                cache.remove(key);
            }

        } else {
            var texture = cache.get(key);
            texture.remove(frameName);
            if (!HasAnyFrame(texture)) {
                cache.remove(key);
            }
        }

    }

}

var HasAnyFrame = function (texture) {
    var frames = texture.frames;
    for (var name in frames) {
        if (name === '__BASE') {
            continue;
        }
        return true;
    }
    return false;
}

export default FreeTexture;