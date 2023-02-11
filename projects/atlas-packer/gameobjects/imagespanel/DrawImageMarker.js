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
    imageContainer.drawImageMarker(graphics, this.markedImageData.name, this.imageMarkerStyle);

    return this;

}

export default DrawImageMarker;