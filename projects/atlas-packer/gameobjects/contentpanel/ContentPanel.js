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
            {
                index: 0,
                proportion: 0, expand: true,
                padding: { left: 10, right: 10, top: 10, bottom: 10 }
            }
        );
    }

    layoutChildren() {
        debugger;
        super.layoutChildren();
    }
}

export default ContentPanel;