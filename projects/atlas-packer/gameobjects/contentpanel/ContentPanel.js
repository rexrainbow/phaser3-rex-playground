import { Sizer } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import ImagesPanel from './imagespanel/ImagesPanel';
import ConfigurationPanel from './ConfigurationPanel.js';

class ContentPanel extends Sizer {
    constructor(scene, config, model) {
        super(scene, {
            orientation: 1
        });

        var mainPanel = new ImagesPanel(scene, config, model);
        scene.add.existing(mainPanel);
        this.add(
            mainPanel,
            { proportion: 1, expand: true }
        );

        var configurationPanel = new ConfigurationPanel(mainPanel, config, model);
        scene.add.existing(configurationPanel);
        this.add(
            configurationPanel,
            { proportion: 0, expand: false, align: 'left' }
        );
    }
}

export default ContentPanel;