var DrawImageMarker = function (imageData) {
    if (imageData !== undefined) {
        this.markedImageData = imageData;
    }

    var graphics = this.childrenMap.imageMarker;
    graphics.clear();

    var imageContainer = this.childrenMap.imageContainer;

    if (!this.markedImageData) {
        return this;
    } else if (!imageContainer.hasImage(this.markedImageData.name)) {
        this.markedImageData = null;
        return this;
    }

    imageContainer.drawImageMarker(graphics, this.markedImageData.name, this.imageMarkerStyle);

    return this;

}

export default DrawImageMarker;