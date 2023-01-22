import { HolyGrail } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateLeftSidePanel from './CreateLeftSidePanel.js';
import CreateContentPanel from './CreateContentPanel.js';

class TopPanel extends HolyGrail {
    constructor(scene, config) {
        if (config === undefined) {
            config = {};
        }

        // Add elements later
        config.leftSide = CreateLeftSidePanel(scene, config);
        config.content = CreateContentPanel(scene, config);
        super(scene, config);

        this.model = config.model;
    }
}

export default TopPanel;