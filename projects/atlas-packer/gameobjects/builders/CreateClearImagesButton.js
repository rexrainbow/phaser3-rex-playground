import { Label } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import BuildDisplayLabelConfig from '../../../../../phaser3-rex-notes/templates/ui/utils/build/BuildDisplayLabelConfig.js';

var CreateClearImagesButton = function (scene, configObj, model) {
    var config = configObj.cloneValue('.');
    config = BuildDisplayLabelConfig(scene, config);
    var button = new Label(scene, config);
    scene.add.existing(button);

    button
        .resetDisplayContent({
            text: 'Clear'
        })
        .onClick(function () {
            model.clearImages(scene);
        });

    return button;
}

export default CreateClearImagesButton;