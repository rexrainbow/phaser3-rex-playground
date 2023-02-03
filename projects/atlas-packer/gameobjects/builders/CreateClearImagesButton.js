import ClearImagesButton from '../buttons/ClearImagesButton.js';

var CreateClearImagesButton = function (scene, config, model) {
    var button = new ClearImagesButton(scene, config, model);
    scene.add.existing(button);
    return button;
}

export default CreateClearImagesButton;