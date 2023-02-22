import PSD from '../lib/psd-standalone.js';

var AddPSDFiles = function (files) {
    // Get layers from psd files
    var layers = [];
    var tasks = [];
    for (var i = 0, cnt = files.length; i < cnt; i++) {
        var task = LoadPSDPromise(files[i])
            .then(function (psd) {
                layers.push(...GetLayers(psd))
            })

        tasks.push(task);
    }

    // Add layers to imageDataList
    var imageDataList = this.imageDataList;
    Promise.all(tasks)
        .then(function () {
            for (var i = 0, cnt = layers.length; i < cnt; i++) {
                var layer = layers[i];
                var sn = 1;
                while (imageDataList.getByName(layer.name)) {
                    layer.name = `${layer.key}.${sn}`;
                    sn++;
                }
                imageDataList.add(layer);
            }

        })

    return this;
}

var LoadPSDPromise = function (file) {
    var url = URL.createObjectURL(file);
    return PSD.fromURL(url)
        .then(function (psd) {
            URL.revokeObjectURL(url);
            return Promise.resolve(psd);
        })
}

var GetLayers = function (psd) {
    var layers = [];

    psd.parse();
    psd.tree().descendants().forEach(function (node) {
        if (node.isGroup()) {
            return true;
        }

        var layer = {
            name: node.name, key: node.name,

            width: node.width, height: node.height,
            left: node.left, right: node.right, top: node.top, bottom: node.bottom,

            image: node.layer.image
            // image.width(), image.height(), image.pixelData
        }
        layers.push(layer)
    });

    return layers;
}


export default AddPSDFiles;