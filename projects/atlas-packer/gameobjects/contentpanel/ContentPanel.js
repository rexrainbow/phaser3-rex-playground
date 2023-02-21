import { Sizer } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateMainPanel from '../builders/CreateMainPanel.js';
import CreateImagesPanelSettingPanel from '../builders/CreateImagesPanelSettingPanel.js';
import CreateStatusPanel from '../builders/CreateStatusPanel.js';

class ContentPanel extends Sizer {
    constructor(scene, configObj, model) {
        super(scene, {
            orientation: 1
        });

        // Main panel
        var mainPanel = CreateMainPanel(scene, configObj, model);
        this.add(
            mainPanel,
            { proportion: 1, expand: true }
        );

        var bottomPanel = new Sizer(scene, {
            orientation: 0
        })
        scene.add.existing(bottomPanel);
        this.add(
            bottomPanel,
            { proportion: 0, expand: true }
        );

        // Setting panel for main panel
        var settingPanel = CreateImagesPanelSettingPanel(scene, configObj.clone().setRefPath('.settingPanel'), model)
            .setBindingTarget(mainPanel)

        // Status panel for main panel        
        var statusPanel = CreateStatusPanel(scene, configObj.clone().setRefPath('.statusPanel'), model)
            .setOrigin(1, 0.5);
        model.on('postupdateimages', function () {
            statusPanel.showStatus(mainPanel);
        })
        statusPanel.showStatus(mainPanel);

        bottomPanel
            .add(settingPanel)
            .addSpace()
            .add(statusPanel)

    }
}

export default ContentPanel;