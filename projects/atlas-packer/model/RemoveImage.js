import FreeTexture from './FreeTexture.js';

var RemoveImage = function (name, freeTextureDelayTime) {
    if (freeTextureDelayTime === undefined) {
        freeTextureDelayTime = 0;
    }

    var imageData = this.imageDataList.getByName(name);
    if (!imageData) {
        return this;
    }

    this.scene.time.delayedCall(
        freeTextureDelayTime,     // time
        FreeTexture,              // callback
        [this.scene, imageData]   // args
    );

    this.imageDataList.remove(imageData);

    this.emit('removeimage', imageData, freeTextureDelayTime);

    this.emit('postupdateimages');

    return this;
}

export default RemoveImage;