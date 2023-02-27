import { SimpleLabel } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import TextTranslation from '../../../../../phaser3-rex-notes/plugins/texttranslation.js';

class StatusPanel extends SimpleLabel {
    constructor(scene, config) {
        super(scene, config);

        this.resetDisplayContent();

        this.translation = new TextTranslation(this, {
            translationKey: 'status'
        });
    }

    showStatus(mainPanel) {
        this.translation
            .updateInterpolation('imageCount', mainPanel.imageCount)
            .updateInterpolation('textureWidth', mainPanel.textureWidth)
            .updateInterpolation('textureHeight', mainPanel.textureHeight)
            .updateText();

        return this;
    }
}

export default StatusPanel;