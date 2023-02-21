import PSD from '../lib/psd-standalone.js';
import WaitEvents from '../../../../phaser3-rex-notes/plugins/waitevents.js';

var AddPSDFiles = function (files) {
    var waitEvents = new WaitEvents(function () {
        debugger;
    });

    for (var i = 0, cnt = files.length; i < cnt; i++) {
        AddPSDFile.call(this, files[i]).then(waitEvents.waitCallback())
    }

    return this
}

var AddPSDFile = function (file) {
    var url = URL.createObjectURL(file);
    return PSD.fromURL(url)
        .then(function (psd) {
            URL.revokeObjectURL(url);

            psd.parse();
            psd.tree().descendants().forEach(function (node) {
                if (node.isGroup()) {
                    return true;
                }

                var layerData = {
                    name: node.name,
                    width: node.width,
                    height: node.height,
                    left: node.left,
                    right: node.right,
                    top: node.top,
                    bottom: node.bottom,
                    image: node.layer.image
                    // image.width(), image.height(), image.pixelData
                }
                console.log(layerData);
            });
        })
}

export default AddPSDFiles;