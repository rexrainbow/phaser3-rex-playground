import { Sizer } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateImageList from '../builders/CreateImageList.js';
import CreateImageDataPanel from '../builders/CreateImageDataPanel.js';

class LeftSidePanel extends Sizer {
    constructor(scene, configObj, model) {
        var config = configObj.cloneValue('.');

        config.orientation = 1;
        super(scene, config);

        // ImageList(a grid-table) can't scroll under fileDragZone.
        var imageList = CreateImageList(scene, configObj.clone().setRefPath('.imageList'), model);

        this.add(
            imageList,
            { proportion: 1, expand: true }
        )

        var imageDataPanel = CreateImageDataPanel(scene, configObj.clone().setRefPath('.imageDataPanel'), model);
        this.add(
            imageDataPanel,
            { proportion: 0, expand: true }
        )

        this.addChildrenMap('imageList', imageList);
        this.addChildrenMap('imageDataPanel', imageDataPanel);
    }
}

export default LeftSidePanel;