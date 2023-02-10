import GetCache from '../../../../phaser3-rex-notes/plugins/utils/system/GetCache.js';

var RemoveImage = function (name) {
    var imageData = this.imageDataList.getByName(name);
    if (!imageData) {
        return this;
    }

    var cache = GetCache(this.scene, 'image');
    cache.remove(imageData.key);

    this.imageDataList.remove(imageData);

    this.emit('removeimage', imageData);

    return this;
}

export default RemoveImage;