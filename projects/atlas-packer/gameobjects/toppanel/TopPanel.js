import { HolyGrail } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateLeftSidePanel from './CreateLeftSidePanel.js';
import CreateContentPanel from './CreateContentPanel.js';
import CreateImageDataDialog from '../builders/CreateImageDataDialog.js';

class TopPanel extends HolyGrail {
    constructor(scene, config) {
        if (config === undefined) {
            config = {};
        }

        // Add elements later
        config.content = CreateContentPanel(scene, config);
        config.leftSide = CreateLeftSidePanel(scene, config);
        super(scene, config);

        this.model = config.model;

        var imageDataDialog = CreateImageDataDialog(scene, config.imageDataDialog)
            .layout()
            .setVisible(false);
        this.pin(imageDataDialog, false);

        this.model
            .on('selectimage', function (imageData) {
                if (!imageDataDialog.visible) {
                    this.setChildVisible(imageDataDialog, true);
                }

                imageDataDialog.bringToTop();

                this.setChildPosition(imageDataDialog, this.centerX, this.centerY);

                imageDataDialog.setBindingTarget(imageData);

            }, this)
    }
}

export default TopPanel;