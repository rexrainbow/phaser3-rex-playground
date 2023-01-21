import { GridTable } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';

class LeftSidePanel extends GridTable {
    constructor(scene, config) {
        super(scene, config);
        this.commandHub = config.commandHub;
    }
}

export default LeftSidePanel;