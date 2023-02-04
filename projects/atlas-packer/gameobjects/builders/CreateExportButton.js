import { Label } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import BuildDisplayLabelConfig from '../../../../../phaser3-rex-notes/templates/ui/utils/build/BuildDisplayLabelConfig.js';

var CreateExportButton = function (scene, configObj, model) {
    var config = configObj.cloneValue('.');
    config = BuildDisplayLabelConfig(scene, config);
    var button = new Label(scene, config);
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