import ExportButton from '../buttons/ExportButton.js';

var CreateExportButton = function (scene, config, model) {
    var button = new ExportButton(scene, config, model);
    scene.add.existing(button);
    return button;
}

export default CreateExportButton;