import { Sizer } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import MainPanel from './MainPanel';
import ConfigurationPanel from './ConfigurationPanel.js';

class ContentPanel extends Sizer {
    constructor(scene, config) {
        super(scene, {
            orientation: 1
        });

        this.model = config.model;

        var mainPanel = new MainPanel(scene, config);
        scene.add.existing(mainPanel);
        this.add(
            mainPanel,
            { proportion: 1, expand: true }
        );

        var configurationPanel = new ConfigurationPanel(mainPanel, config);
        scene.add.existing(configurationPanel);
        this.add(
            configurationPanel,
            { index: 0, proportion: 0, expand: false, align:'left' }
        );
    }
}

export default ContentPanel;