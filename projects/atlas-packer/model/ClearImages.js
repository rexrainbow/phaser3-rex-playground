import GetCache from '../../../../phaser3-rex-notes/plugins/utils/system/GetCache.js';

var ClearImages = function () {
    var imageDataArray = this.imageDataList.list;
    var cache = GetCache(this.scene, 'image');
    for (var i = 0, cnt = imageDataArray.length; i < cnt; i++) {
        cache.remove(imageDataArray[i].key);
    }

    this.imageDataList.removeAll();

    this.emit('clearimages');

    return this;
}

export default ClearImages;