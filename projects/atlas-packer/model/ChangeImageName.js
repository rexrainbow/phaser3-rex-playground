var ChangeImageName = function (oldName, newName) {
    if (this.hasImage(newName) || !this.hasImage(oldName)) {
        return this;
    }

    var imageData = this.imageDataList.getByName(oldName);
    imageData.name = newName;

    this.emit('renameimage', newName, oldName, imageData);

    return this;
}

export default ChangeImageName;