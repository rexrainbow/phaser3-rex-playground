import { SimpleLabel } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';

class StatusPanel extends SimpleLabel {
    showStatus(mainPanel) {
        this.resetDisplayContent(`${mainPanel.imageCount} images, ${mainPanel.textureWidth} x ${mainPanel.textureHeight}`);
        return this;
    }
}

export default StatusPanel;