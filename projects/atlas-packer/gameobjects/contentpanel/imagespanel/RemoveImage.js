var RemoveImage = function (imageData) {
    var imageContainer = this.childrenMap.imageContainer;

    imageContainer
        .removeImage(imageData)
        .layout()

    this.resetChildScaleState(imageContainer);

    this.drawImagesOutline();

    var placeholder = this.childrenMap.placeholder;
    this.setChildVisible(placeholder, imageContainer.empty);

    return this;
}

export default RemoveImage;