var OnUpdateImages = function () {
    if (this.prevImageContainerWidth === undefined) {
        this.prevImageContainerWidth = 0;
        this.prevImageContainerHeight = 0;
    }

    var imageContainer = this.childrenMap.imageContainer;
    var currDisplayWidth = imageContainer.displayWidth,
        curDisplayHeight = imageContainer.displayHeight;

    imageContainer.setDisplaySize(this.prevImageContainerWidth, this.prevImageContainerHeight)
    this.scene.tweens.add({
        targets: imageContainer,
        displayWidth: currDisplayWidth,
        displayHeight: curDisplayHeight,
        duration: 200,
    })
        .on('update', function () {
            this.resetChildScaleState(imageContainer);
            this.drawImagesOutline();
            this.drawImageMarker();
        }, this);

    this.prevImageContainerWidth = currDisplayWidth;
    this.prevImageContainerHeight = curDisplayHeight;
}

export default OnUpdateImages;