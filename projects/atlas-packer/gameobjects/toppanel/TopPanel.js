import { HolyGrail } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateHeaderPanel from '../builders/CreateHeaderPanel.js';
import CreateLeftSidePanel from '../builders/CreateLeftSidePanel.js';
import CreateContentPanel from '../builders/CreateContentPanel.js';

class TopPanel extends HolyGrail {
    constructor(scene, config, model) {
        if (config === undefined) {
            config = {};
        }

        // Add elements later
        config.content = CreateContentPanel(scene, config.content, model);
        config.leftSide = CreateLeftSidePanel(scene, config.leftSide, model);
        config.header = CreateHeaderPanel(scene, config.header, model);
        super(scene, config);

        this.model = model;
    }
}

export default TopPanel;