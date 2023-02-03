var GenerateJSONDataBlob = function (scene, imageDataArray) {
    var frames = {}
    for (var i = 0, cnt = imageDataArray.length; i < cnt; i++) {
        var imageData = imageDataArray[i];
        frames[imageData.name] = {
            frame: {
                x: imageData.x,
                y: imageData.y,
                w: imageData.width,
                h: imageData.height,
            },
        }
    }

    var jsonData = {
        frames: frames
    }

    return new Promise(function (resolve, reject) {
        var blob = new Blob([JSON.stringify(jsonData)], { type: "text/plain;charset=utf-8" });
        resolve(blob)
    });
}

export default GenerateJSONDataBlob;