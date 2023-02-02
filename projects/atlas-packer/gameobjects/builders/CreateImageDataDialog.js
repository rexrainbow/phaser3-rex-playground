import ImageDataDialog from '../imagedatadialog/ImageDataDialog.js';

var CreateImageDataDialog = function (scene, config) {
    var dialog = new ImageDataDialog(scene, config);
    scene.add.existing(dialog);
    return dialog;
}

export default CreateImageDataDialog;