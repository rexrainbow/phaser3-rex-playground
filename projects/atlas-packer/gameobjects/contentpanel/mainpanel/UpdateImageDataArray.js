var UpdateImageDataArray = function (imageDataArray) {
    var imageContainer = this.childrenMap.imageContainer;
    for (var i = 0, cnt = imageDataArray.length; i < cnt; i++) {
        var imageData = imageDataArray[i];
        var imageGO = imageContainer.getImage(imageData.name);
        imageData.x = imageGO.x;
        imageData.y = imageGO.y;
        imageData.width = imageGO.width;
        imageData.height = imageGO.height;
    }

    return this;
}

export default UpdateImageDataArray;