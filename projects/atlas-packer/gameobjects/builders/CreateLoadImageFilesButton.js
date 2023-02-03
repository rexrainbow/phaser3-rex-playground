import LoadImageFilesButton from '../buttons/LoadImageFilesButton.js';

var CreateLoadImageFilesButton = function (scene, config, model) {
    var button = new LoadImageFilesButton(scene, config, model);
    scene.add.existing(button);
    return button;
}

export default CreateLoadImageFilesButton;