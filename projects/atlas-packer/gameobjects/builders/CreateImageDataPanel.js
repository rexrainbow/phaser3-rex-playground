import ImageDataPanel from '../imagedatapanel/ImageDataPanel.js';

var CreateImageDataPanel = function (scene, config, model) {
    var dialog = new ImageDataPanel(scene, config, model);
    scene.add.existing(dialog);
    return dialog;
}

export default CreateImageDataPanel;