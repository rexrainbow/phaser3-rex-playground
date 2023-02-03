import { Sizer } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateImageList from '../builders/CreateImageList.js';
import CreateImageDataPanel from '../builders/CreateImageDataPanel.js';

class LeftSidePanel extends Sizer {
    constructor(scene, config, model) {
        if (config === undefined) {
            config = {};
        }
        config.orientation = 1;
        super(scene, config);

        // ImageList(a grid-table) can't scroll under fileDragZone.
        var imageList = CreateImageList(scene, config.imageList, model);
        this.add(
            imageList,
            { proportion: 1, expand: true }
        )

        var imageDataPanel = CreateImageDataPanel(scene, config.imageDataPanel, model);
        this.add(
            imageDataPanel,
            { proportion: 0, expand: true }
        )

        this.addChildrenMap('imageList', imageList);
        this.addChildrenMap('imageDataPanel', imageDataPanel);
    }
}

export default LeftSidePanel;