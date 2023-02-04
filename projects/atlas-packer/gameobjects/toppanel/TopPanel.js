import { HolyGrail } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateHeaderPanel from '../builders/CreateHeaderPanel.js';
import CreateLeftSidePanel from '../builders/CreateLeftSidePanel.js';
import CreateContentPanel from '../builders/CreateContentPanel.js';

class TopPanel extends HolyGrail {
    constructor(scene, configObj, model) {
        var config = configObj.cloneValue('.');
        // Add elements later
        config.content = CreateContentPanel(scene, configObj.clone().setRefPath('.content'), model);

        config.leftSide = CreateLeftSidePanel(scene, configObj.clone().setRefPath('.leftSide'), model);

        config.header = CreateHeaderPanel(scene, configObj.clone().setRefPath('.header'), model);

        super(scene, config);

        this.model = model;
    }
}

export default TopPanel;