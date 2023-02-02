import { Sizer } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateImageList from '../builders/CreateImageList.js';
import CreateImageDataDialog from '../builders/CreateImageDataDialog.js';

class LeftSidePanel extends Sizer {
    constructor(scene, config) {
        if (config === undefined) {
            config = {};
        }
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

        var imageDataDialogConfig = config.imageDataDialog;
        var imageDataDialog = CreateImageDataDialog(scene, imageDataDialogConfig);
        this.add(
            imageDataDialog,
            { proportion: 0, expand: true }
        )

        this.addChildrenMap('imageList', imageList);
        this.addChildrenMap('imageDataDialog', imageDataDialog);

        this.model
            .on('selectimage', function (imageData) {
                imageDataDialog.setBindingTarget(imageData);
            })
    }
}

export default LeftSidePanel;