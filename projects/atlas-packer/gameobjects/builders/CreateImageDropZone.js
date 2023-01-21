import FileDropZone from '../../../../../phaser3-rex-notes/plugins/filedropzone.js';

var CreateImageDropZone = function (scene) {
    var imageDropZone = new FileDropZone(scene, {
        filters: {
            image: function (file) { return file.name.match(/\.(jpg|jpeg|png|gif)$/i) }
        }
    })
    scene.add.existing(imageDropZone);

    return imageDropZone;
}

export default CreateImageDropZone;