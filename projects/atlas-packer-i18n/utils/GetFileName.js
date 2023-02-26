var GetFileName = function (file) {
    var fileName = file.name;
    var name = fileName.substring(0, fileName.lastIndexOf('.'));
    return name;
}

export default GetFileName;