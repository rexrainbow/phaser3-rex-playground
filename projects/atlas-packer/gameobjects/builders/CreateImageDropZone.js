import { FileDropZone } from '../../../../../phaser3-rex-notes/templates/ui/ui-components';

var CreateImageDropZone = function (scene, config, model) {
    var imageDropZone = new FileDropZone(scene, {
        filters: {
            image: function (file) { return file.name.match(/\.(jpg|jpeg|png|gif)$/i) }
        }
        // Fire `'drop.image'` event
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