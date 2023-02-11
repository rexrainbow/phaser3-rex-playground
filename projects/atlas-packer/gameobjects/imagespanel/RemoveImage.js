var RemoveImage = function (imageData) {
    var imageContainer = this.childrenMap.imageContainer;

    imageContainer
        .removeImage(imageData)
        .layout()

    this.resetChildScaleState(imageContainer);

    this.drawImagesOutline();

    if (this.markedImageData && (imageData.name === this.markedImageData.name)) {
        this.drawImageMarker(null);
    } else {
        this.drawImageMarker();
    }


    var placeholder = this.childrenMap.placeholder;
    this.setChildVisible(placeholder, imageContainer.empty);

    return this;
}

export default RemoveImage;