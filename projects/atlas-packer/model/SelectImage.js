var SelectImage = function (name) {
    var imageData = this.imageDataList.getByName(name);
    if (imageData) {
        this.emit('selectimage', imageData);
    }
    return this;
}

export default SelectImage;