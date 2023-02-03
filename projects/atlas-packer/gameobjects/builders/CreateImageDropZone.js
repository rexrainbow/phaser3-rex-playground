import { FileDropZone } from '../../../../../phaser3-rex-notes/templates/ui/ui-components';

var CreateImageDropZone = function (scene, config, model) {
    var imageDropZone = new FileDropZone(scene, {
        filters: {
            image: function (file) { return file.name.match(/\.(jpg|jpeg|png|gif)$/i) }
        }
    })
    scene.add.existing(imageDropZone);

    return imageDropZone;
}

export default CreateImageDropZone;