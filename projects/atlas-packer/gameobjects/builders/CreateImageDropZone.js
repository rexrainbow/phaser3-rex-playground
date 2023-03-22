import { FileDropZone } from '../../../../../phaser3-rex-notes/templates/ui/ui-components';

var CreateImageDropZone = function (scene, config, model) {
    var imageDropZone = new FileDropZone(scene, {
        filters: {
            image: function (file, files) {
                if (AreAltasFiles(files)) {
                    return false;
                }
                return file.name.match(/\.(jpg|png)$/i)
            },

            atlas: function (file, files) {
                return AreAltasFiles(files);
            }
        }
        // Fire `'drop.image'`, `'drop.atlas'` event
    })
    scene.add.existing(imageDropZone);

    imageDropZone.once('build.complete', function (topSizer) {
        topSizer
            .on('modal.open', function () {
                imageDropZone.setVisible(false);
            })
            .on('modal.close', function () {
                imageDropZone.setVisible(true);
            })
    });

    return imageDropZone;
}

var AreAltasFiles = function (files) {
    if (files.length !== 2) {
        return false;
    }

    var hasJSONFile = false;
    var hasIMGFile = false;
    for (var i = 0; i < 2; i++) {
        var file = files[i];
        if (file.name.match(/\.(jpg|png)$/i)) {
            hasIMGFile = true;
        } else if (file.name.match(/\.(json)$/i)) {
            hasJSONFile = true;
        }
    }

    return hasJSONFile && hasIMGFile;
}

export default CreateImageDropZone;