import FreeTexture from './FreeTexture.js';

var ClearImages = function (freeTextureDelayTime) {
    if (freeTextureDelayTime === undefined) {
        freeTextureDelayTime = 0;
    }

    var imageData = [...this.imageDataList.list];
    this.scene.time.delayedCall(
        freeTextureDelayTime,      // time
        FreeTexture,               // callback
        [this.scene, imageData]    // args
    );

    this.imageDataList.removeAll();

    this.emit('clearimages', freeTextureDelayTime);

    this.emit('postupdateimages');

    return this;
}

export default ClearImages;