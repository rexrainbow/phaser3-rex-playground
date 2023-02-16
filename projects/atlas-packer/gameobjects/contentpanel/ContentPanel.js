import { Sizer } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateImagesPanel from '../builders/CreateImagesPanel.js';
import CreateImagesPanelSettingPanel from '../builders/CreateImagesPanelSettingPanel.js';

class ContentPanel extends Sizer {
    constructor(scene, configObj, model) {
        super(scene, {
            orientation: 1
        });

        var imagesPanel = CreateImagesPanel(scene, configObj, model);
        this.add(
            imagesPanel,
            { proportion: 1, expand: true }
        );

        var settingPanel = CreateImagesPanelSettingPanel(scene, configObj.clone().setRefPath('.settingPanel'), model)
            .setBindingTarget(imagesPanel)
        this.add(
            settingPanel,
            { proportion: 0, expand: false, align: 'left' }
        );
    }
}

export default ContentPanel;