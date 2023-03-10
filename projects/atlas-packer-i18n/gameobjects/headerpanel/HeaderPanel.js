import { Sizer } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateLoadImageFilesButton from '../builders/CreateLoadImageFilesButton.js';
import CreateClearImagesButton from '../builders/CreateClearImagesButton.js';
import CreateExportButton from '../builders/CreateExportButton.js';
import CreateSelectLanguageButton from '../builders/CreateSelectLanguageButton.js';
import CreateAboutButton from '../builders/CreateAboutButton.js';

class HeaderPanel extends Sizer {
    constructor(scene, configObj, model) {
        var config = configObj.cloneValue('.');

        config.orientation = 0;
        super(scene, config);

        var buttonConfigRefPath = (configObj.hasKey('.button'))? '.button' : 'button';
        var buttonConfigObj = configObj.setRefPath(buttonConfigRefPath);

        this
            .add(
                CreateLoadImageFilesButton(scene, buttonConfigObj, model)
            )
            .add(
                CreateClearImagesButton(scene, buttonConfigObj, model)
            )
            .add(
                CreateExportButton(scene, buttonConfigObj, model)
            )
            .addSpace()
            .add(
                CreateSelectLanguageButton(scene, buttonConfigObj, model)
            )
            .add(
                CreateAboutButton(scene, buttonConfigObj, model)
            )
    }
}

export default HeaderPanel;