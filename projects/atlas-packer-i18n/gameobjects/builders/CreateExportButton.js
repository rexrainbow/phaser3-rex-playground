import { SimpleLabel } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import TextTranslation from '../../../../../phaser3-rex-notes/plugins/texttranslation.js';

var CreateExportButton = function (scene, configObj, model) {
    var config = configObj.cloneValue('.');
    var button = new SimpleLabel(scene, config);
    scene.add.existing(button);

    button
        .resetDisplayContent({
            icon: 'sprites', iconFrame: 'arrow-down',
            text: 'Export'
        })
        .onClick(function () {
            model.generateOutput(scene);
        });

    var translation = new TextTranslation(button, {
        translationKey: 'export'
    });

    return button;
}

export default CreateExportButton;