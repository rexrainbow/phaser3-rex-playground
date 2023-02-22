var GenerateImageBlobArray = function (layerList) {
    var tasks = [];
    var textures = this.scene.textures;
    for (var i = 0, cnt = layerList.length; i < cnt; i++) {
        // Get canvas from texture manager
        let canvas = textures.get(layerList[i].key).getCanvas();
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