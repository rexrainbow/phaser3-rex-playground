import ImageDataPanel from '../imagedatapanel/ImageDataPanel.js';

var CreateImageDataPanel = function (scene, config) {
    var dialog = new ImageDataPanel(scene, config);
    scene.add.existing(dialog);
    return dialog;
}

export default CreateImageDataPanel;