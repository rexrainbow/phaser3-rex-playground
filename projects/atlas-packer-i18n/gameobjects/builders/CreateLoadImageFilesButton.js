import { FileSelectorButton } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import BuildLabelConfig from '../../../../../phaser3-rex-notes/templates/ui/utils/build/BuildLabelConfig.js';
import TextTranslation from '../../../../../phaser3-rex-notes/plugins/texttranslation.js';

var CreateLoadImageFilesButton = function (scene, configObj, model) {
    var config = configObj.cloneValue('.');
    config = BuildLabelConfig(scene, config);
    var button = new FileSelectorButton(scene, config);
    scene.add.existing(button);

    button
        .resetDisplayContent({
            icon: 'sprites', iconFrame: 'add',
            text: 'Import'
        })
        .setAccept('image/*')
        .setMultiple(true)
        .on('select', function (files) {
            model.addImageFiles(files);
        })
        // Hover state
        .setInteractive()
        .on('pointerover', function () {
            button.getElement('background').setHoverState(true);
        })
        .on('pointerout', function () {
            button.getElement('background').setHoverState(false);
        })

    var translation = new TextTranslation(button, {
        translationKey: 'import'
    });

    return button;
}

export default CreateLoadImageFilesButton;