const ReImage = /\.(jpg|jpeg|png)$/i;

var IsImageFile = function (file) {
    return file.name.match(ReImage);
}

export default IsImageFile;