import { Label } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import BuildDisplayLabelConfig from '../../../../../phaser3-rex-notes/templates/ui/utils/build/BuildDisplayLabelConfig.js';

var CreateAboutButton = function (scene, config, model) {
    config = BuildDisplayLabelConfig(scene, config);
    var button = new Label(scene, config);
    scene.add.existing(button);

    button
        .resetDisplayContent({
            text: 'About'
        })
        .onClick(function () {
            // TODO: config of About modal-dialog?
        });

    return button;
}

export default CreateAboutButton;