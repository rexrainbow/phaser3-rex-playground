import { OverlapSizer } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateImageList from '../builders/CreateImageList.js';

class LeftSidePanel extends OverlapSizer {
    constructor(scene, config) {
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
            { align: 'center', expand: true }
        )

        this.addChildrenMap('imageList', imageList);
    }
}

export default LeftSidePanel;