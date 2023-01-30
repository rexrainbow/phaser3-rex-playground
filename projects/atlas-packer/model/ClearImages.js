import GetCache from '../../../../phaser3-rex-notes/plugins/utils/system/GetCache.js';

var ClearImages = function (scene) {
    var imageDataArray = this.imageDataList.list;
    this.emit('clearimages', imageDataArray);

    var cache = GetCache(scene, 'image');
    for (var i = 0, cnt = imageDataArray.length; i < cnt; i++) {
        cache.remove(imageDataArray[i].key);
    }

    this.imageDataList.removeAll();
    return this;
}

export default ClearImages;