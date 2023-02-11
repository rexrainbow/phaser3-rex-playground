var UpdateImageDataArray = function (imageDataArray) {
    var imageContainer = this.childrenMap.imageContainer;
    for (var i = 0, cnt = imageDataArray.length; i < cnt; i++) {
        var imageData = imageDataArray[i];
        var imageGO = imageContainer.getImage(imageData.name);
        Object.assign(imageData, imageGO.imageData);
    }

    return this;
}

export default UpdateImageDataArray;