var DrawImagesOutline = function () {
    var graphics = this.childrenMap.outline;
    graphics.clear();

    if (!this.outlineEnable) {
        return this;
    }

    var imageContainer = this.childrenMap.imageContainer;
    imageContainer.drawImagesBounds(graphics, this.outlineStyle);

    return this;
}

export default DrawImagesOutline;