import { Sizer } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateLoadImageFilesButton from '../builders/CreateLoadImageFilesButton.js';
import CreateClearImagesButton from '../builders/CreateClearImagesButton.js';
import CreateExportButton from '../builders/CreateExportButton.js';

class HeaderPanel extends Sizer {
    constructor(scene, config, model) {
        if (config === undefined) {
            config = {};
        }
        config.orientation = 0;
        super(scene, config);

        var buttonConfig = config.button;

        this
            .add(
                CreateLoadImageFilesButton(scene, buttonConfig, model)
            )
            .add(
                CreateClearImagesButton(scene, buttonConfig, model)
            )
            .addSpace()
            .add(
                CreateExportButton(scene, buttonConfig, model)
            )
    }
}

export default HeaderPanel;