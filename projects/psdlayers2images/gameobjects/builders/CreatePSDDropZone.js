import { FileDropZone } from '../../../../../phaser3-rex-notes/templates/ui/ui-components';

var CreatePSDDropZone = function (scene, config, model) {
    var imageDropZone = new FileDropZone(scene, {
        filters: {
            psd: function (file) { return file.name.match(/\.psd/i) }
        }
        // Fire `'drop.psd'` event
    })
    scene.add.existing(imageDropZone);

    return imageDropZone;
}

export default CreatePSDDropZone;