import { HolyGrail } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CommandHub from '../../../../../phaser3-rex-notes/plugins/utils/commandhub/CommandHub.js';
import CreateLeftSidePanel from './CreateLeftSidePanel.js';
import CreateContentPanel from './CreateContentPanel.js';

class TopPanel extends HolyGrail {
    constructor(scene, config) {
        if (config === undefined) {
            config = {};
        }

        // Add elements later
        var leftSideConfig = config.leftSide;
        delete config.leftSide;
        var contentConfig = config.content;
        delete config.content;

        super(scene, config);

        config.leftSide = leftSideConfig;
        config.content = contentConfig;
        config.commandHub = new CommandHub(this, { eventEmitter: this });

        // Rebuild
        config.leftSide = CreateLeftSidePanel(scene, config);
        config.content = CreateContentPanel(scene, config);
        this.build(config);
    }
}

export default TopPanel;