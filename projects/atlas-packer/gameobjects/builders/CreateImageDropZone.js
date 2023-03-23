import { FileDropZone } from '../../../../../phaser3-rex-notes/templates/ui/ui-components';
import IsImageFile from '../../utils/IsImageFile.js';
import AreAltasFiles from '../../utils/AreAltasFiles.js';

var CreateImageDropZone = function (scene, config, model) {
    var imageDropZone = new FileDropZone(scene, {
        filters: {
            image: function (file, files) {
                if (AreAltasFiles(files)) {
                    return false;
                }
                return IsImageFile(file);
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

export default CreateImageDropZone;