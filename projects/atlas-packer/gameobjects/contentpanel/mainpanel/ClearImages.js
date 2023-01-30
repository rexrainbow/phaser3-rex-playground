var ClearImages = function () {
    var imageContainer = this.childrenMap.imageContainer;

    imageContainer
        .clearImages()
        .layout()

    this.resetChildScaleState(imageContainer);

    this.drawImagesOutline();

    var placeholder = this.childrenMap.placeholder;
    this.setChildVisible(placeholder, true);

    return this;
}

export default ClearImages;