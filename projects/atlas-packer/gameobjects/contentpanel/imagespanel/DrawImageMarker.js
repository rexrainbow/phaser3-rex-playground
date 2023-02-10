var DrawImageMarker = function (imageData) {
    if (imageData !== undefined) {
        this.markedImageData = imageData;
    }

    var graphics = this.childrenMap.imageMarker;
    graphics.clear();

    if (!this.markedImageData) {
        return this;
    }

    var imageContainer = this.childrenMap.imageContainer;
    imageContainer.drawImageMarker(graphics, this.markedImageData.name, MarkerStyle);

    return this;

}

var MarkerStyle = {
    color: 0xff0000,
    lineWidth: 3,
    fillColor: 0x333333,
    fillAlpha: 0.5,
}

export default DrawImageMarker;