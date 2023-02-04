var RenameImage = function (oldName, newName) {
    var imageContainer = this.childrenMap.imageContainer;
    imageContainer.renameImage(oldName, newName);
    return this;
}

export default RenameImage;