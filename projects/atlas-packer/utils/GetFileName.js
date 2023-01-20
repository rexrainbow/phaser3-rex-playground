var GetFileName = function (file) {
    var fileName = file.name;
    var name = fileName.substring(fileName.lastIndexOf('.'));
    return name;
}

export default GetFileName;