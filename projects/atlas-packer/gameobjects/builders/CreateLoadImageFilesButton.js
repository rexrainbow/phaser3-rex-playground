import { FileSelectorButton } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import BuildDisplayLabelConfig from '../../../../../phaser3-rex-notes/templates/ui/utils/build/BuildDisplayLabelConfig.js';

var CreateLoadImageFilesButton = function (scene, config, model) {
    config = BuildDisplayLabelConfig(scene, config);
    var button = new FileSelectorButton(scene, config);
    scene.add.existing(button);

    button
        .resetDisplayContent({
            text: 'Import files'
        })
        .setAccept('image/*')
        .setMultiple(true)
        .on('select', function (files) {
            model.addImageFiles(scene, files);
        });

    return button;
}

export default CreateLoadImageFilesButton;