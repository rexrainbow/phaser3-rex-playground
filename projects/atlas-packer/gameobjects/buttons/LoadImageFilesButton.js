import { FileSelectorButton } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import BuildDisplayLabelConfig from '../../../../../phaser3-rex-notes/templates/ui/utils/build/BuildDisplayLabelConfig.js';

class LoadImageFilesButton extends FileSelectorButton {
    constructor(scene, config, model) {
        config = BuildDisplayLabelConfig(scene, config);
        super(scene, config);

        this
            .resetDisplayContent({
                text: 'Import files'
            })
            .setAccept('image/*')
            .setMultiple(true)
            .on('select', function (files) {
                model.addImageFiles(scene, files);
            });
    }
}

export default LoadImageFilesButton;