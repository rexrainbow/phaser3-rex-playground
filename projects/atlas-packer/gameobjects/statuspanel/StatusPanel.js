import { SimpleLabel } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';

class StatusPanel extends SimpleLabel {
    showStatus(imagesPanel) {
        this.resetDisplayContent(`${imagesPanel.imageCount} images, ${imagesPanel.textureWidth} X ${imagesPanel.textureHeight}`);
        return this;
    }
}

export default StatusPanel;