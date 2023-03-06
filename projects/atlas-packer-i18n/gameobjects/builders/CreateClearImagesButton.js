import { SimpleLabel } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import TextTranslation from '../../../../../phaser3-rex-notes/plugins/texttranslation.js';

var CreateClearImagesButton = function (scene, configObj, model) {
    var config = configObj.cloneValue('.');
    var button = new SimpleLabel(scene, config);
    scene.add.existing(button);

    button
        .resetDisplayContent({
            icon: 'sprites', iconFrame: 'close',
            text: 'Clear'
        })
        .onClick(function () {
            model.clearImages();
        })
        .on('pointerover', function () {
            button.setHoverState(true);
        })
        .on('pointerout', function () {
            button.setHoverState(false);
        })

    var translation = new TextTranslation(button, {
        translationKey: 'clear'
    });

    return button;
}

export default CreateClearImagesButton;