import IsImageFile from './IsImageFile.js';
import IsJSONFile from './IsJSONFile.js';

var AreAltasFiles = function (files) {
    if (files.length !== 2) {
        return false;
    }

    var hasJSONFile = false;
    var hasIMGFile = false;
    for (var i = 0; i < 2; i++) {
        var file = files[i];
        if (IsJSONFile(file)) {
            hasJSONFile = true;
        } else if (IsImageFile(file)) {
            hasIMGFile = true;
        }
    }

    return hasJSONFile && hasIMGFile;
}

export default AreAltasFiles;