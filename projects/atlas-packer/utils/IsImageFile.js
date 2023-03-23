const ReImage = /\.(jpg|png)$/i;

var IsImageFile = function (file) {
    return file.name.match(ReImage);
}

export default IsImageFile;