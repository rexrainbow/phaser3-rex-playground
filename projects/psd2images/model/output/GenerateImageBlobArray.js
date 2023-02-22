var GenerateImageBlobArray = function (layerList) {
    var tasks = [];    
    for (var i = 0, cnt = layerList.length; i < cnt; i++) {
        let canvas = layerList[i].canvas;
        var task = new Promise(function (resolve, reject) {
            canvas.toBlob(function (blob) {
                resolve(blob);
            });
        });
        tasks.push(task);
    }

    return tasks;
}

export default GenerateImageBlobArray;