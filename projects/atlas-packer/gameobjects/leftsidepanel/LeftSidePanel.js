import { Sizer } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateImageList from '../builders/CreateImageList.js';
import CreateImageDataPanel from '../builders/CreateImageDataPanel.js';

class LeftSidePanel extends Sizer {
    constructor(scene, config) {
        config.orientation = 1;
        super(scene, config);
        this.model = config.model;

        // ImageList(a grid-table) can't scroll under fileDragZone.
        var imageListConfig = config.imageList;
        if (imageListConfig === undefined) {
            imageListConfig = {};
        }
        imageListConfig.model = this.model;
        var imageList = CreateImageList(scene, imageListConfig);
        this.add(
            imageList,
            { proportion: 1, expand: true }
        )

        var imageDataPanelConfig = config.imageDataPanel;
        if (imageDataPanelConfig === undefined) {
            imageDataPanelConfig = {};
        }
        imageDataPanelConfig.model = this.model;
        var imageDataPanel = CreateImageDataPanel(scene, imageDataPanelConfig);
        this.add(
            imageDataPanel,
            { proportion: 0, expand: true }
        )

        this.addChildrenMap('imageList', imageList);
        this.addChildrenMap('imageDataPanel', imageDataPanel);
    }
}

export default LeftSidePanel;