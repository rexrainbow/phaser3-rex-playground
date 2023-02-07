import { SimpleLabel } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';

var CreateExportButton = function (scene, configObj, model) {
    var config = configObj.cloneValue('.');
    var button = new SimpleLabel(scene, config);
    scene.add.existing(button);

    button
        .resetDisplayContent({
            text: 'Export'
        })
        .onClick(function () {
            model.generateOutput(scene);
        });

    return button;
}

export default CreateExportButton;