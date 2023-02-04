import ImageDataPanel from '../imagedatapanel/ImageDataPanel.js';

var CreateImageDataPanel = function (scene, configObj, model) {
    var dialog = new ImageDataPanel(scene, configObj, model);
    scene.add.existing(dialog);
    return dialog;
}

export default CreateImageDataPanel;