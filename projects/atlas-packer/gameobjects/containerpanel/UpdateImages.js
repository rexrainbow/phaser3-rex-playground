var UpdateImages = function (newImages, removeImages) {
    // newImages, removeImages : Array of Image game object
    if (!newImages && !removeImages) {
        return this;
    }

    var imageContainer = this.childrenMap.imageContainer;

    if (newImages) {
        if (!Array.isArray(newImages)) {
            newImages = [newImages];
        }

        for (var i = 0, cnt = newImages.length; i < cnt; i++) {
            imageContainer.addImage(newImages[i]);
        }
    }

    if (removeImages) {
        if (!Array.isArray(removeImages)) {
            removeImages = [removeImages];
        }

        for (var i = 0, cnt = removeImages.length; i < cnt; i++) {
            imageContainer.removeImage(removeImages[i]);
        }
    }

    imageContainer
        .layout()
        .fitTo(this.displayWidth, this.displayHeight);

    this.resetChildScaleState(imageContainer);

    return this;
}

export default UpdateImages;