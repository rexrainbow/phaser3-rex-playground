var UpdateImages = function (newImageDataArray, removeImageDataArray) {
    // newImages, removeImages : Array of Image game object
    if (!newImageDataArray && !removeImageDataArray) {
        return this;
    }

    var imageContainer = this.childrenMap.imageContainer;

    if (newImageDataArray) {
        if (!Array.isArray(newImageDataArray)) {
            newImageDataArray = [newImageDataArray];
        }

        for (var i = 0, cnt = newImageDataArray.length; i < cnt; i++) {
            imageContainer.addImage(newImageDataArray[i]);
        }
    }

    if (removeImageDataArray === true) {
        // Clear all images
        imageContainer.clearImages();

    } else if (removeImageDataArray) {
        // Remove an image, or some images
        if (!Array.isArray(removeImageDataArray)) {
            removeImageDataArray = [removeImageDataArray];
        }

        for (var i = 0, cnt = removeImageDataArray.length; i < cnt; i++) {
            imageContainer.removeImage(removeImageDataArray[i]);
        }

    }

    imageContainer
        .layout()
        .fitTo(this.displayWidth, this.displayHeight)

    this.resetChildScaleState(imageContainer);

    this.drawImagesOutline();
    this.drawImageMarker();

    var placeholder = this.childrenMap.placeholder;
    this.setChildVisible(placeholder, imageContainer.empty);

    return this;
}

export default UpdateImages;