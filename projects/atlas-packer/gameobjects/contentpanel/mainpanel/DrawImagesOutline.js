var DrawImagesOutline = function () {
    var graphics = this.childrenMap.outline;

    graphics.clear();

    if (this.outlineEnable) {
        var imageContainer = this.childrenMap.imageContainer;
        imageContainer.drawImagesBounds(graphics);
    }

    return this;
}

export default DrawImagesOutline;