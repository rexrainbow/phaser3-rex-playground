import PSD from '../lib/psd-standalone.js';
import CreateLayerData from './CreateLayerData.js';

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

    // Add layers to layerList
    var layerList = this.layerList;
    var self = this;
    Promise.all(tasks)
        .then(function () {
            for (var i = 0, cnt = layers.length; i < cnt; i++) {
                var layer = layers[i];
                var sn = 1;
                while (layerList.getByName(layer.name)) {
                    layer.name = `${layer.key}.${sn}`;
                    sn++;
                }
                layerList.add(layer);
            }

            self.emit('addlayers', layers);
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

        layers.push(CreateLayerData(node));
    });

    return layers;
}

export default AddPSDFiles;