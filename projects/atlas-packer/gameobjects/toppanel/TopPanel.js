import { HolyGrail } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateHeaderPanel from './CreateHeaderPanel.js';
import CreateLeftSidePanel from './CreateLeftSidePanel.js';
import CreateContentPanel from './CreateContentPanel.js';

class TopPanel extends HolyGrail {
    constructor(scene, config, model) {
        if (config === undefined) {
            config = {};
        }

        // Add elements later
        config.content = CreateContentPanel(scene, config, model);
        config.leftSide = CreateLeftSidePanel(scene, config, model);
        config.header = CreateHeaderPanel(scene, config, model);
        super(scene, config);

        this.model = model;
    }
}

export default TopPanel;