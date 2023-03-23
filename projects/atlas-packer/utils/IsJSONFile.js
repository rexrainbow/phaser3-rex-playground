const ReJSON = /\.(json)$/i;

var IsJSONFile = function (file) {
    return file.name.match(ReJSON);
}

export default IsJSONFile;