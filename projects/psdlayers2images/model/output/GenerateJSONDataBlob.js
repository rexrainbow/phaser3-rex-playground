var GenerateJSONDataBlob = function (layerList) {
    var layerListCopy = [];

    for (var i = 0, cnt = layerList.length; i < cnt; i++) {
        var layer = layerList[i];
        var layerDataCopy = {
            name: layer.name,
            width: layer.width,
            height: layer.height,
            left: layer.left,
            right: layer.right,
            top: layer.top,
            bottom: layer.bottom,
        }

        layerListCopy.push(layerDataCopy)
    }

    var jsonData = {
        layers: layerListCopy
    }

    return new Promise(function (resolve, reject) {
        var blob = new Blob([JSON.stringify(jsonData)], { type: "text/plain;charset=utf-8" });
        resolve(blob)
    });
}

export default GenerateJSONDataBlob;