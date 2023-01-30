import { OverlapSizer } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
// import CreateImageDropZone from '../builders/CreateImageDropZone.js';
import CreateImageList from '../builders/CreateImageList.js';

class LeftSidePanel extends OverlapSizer {
    constructor(scene, config) {
        super(scene, config);
        this.model = config.model;

        // Can't add image drop zone below image list
        //var imageDropZone = CreateImageDropZone(scene);
        //this.addBackground(imageDropZone);

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

        //this.addChildrenMap('imageDropZone', imageDropZone);
        this.addChildrenMap('imageList', imageList);

        //imageDropZone.on('drop.image', function (files) {
        //    this.model.addImageFiles(this.scene, files);
        //}, this);
    }
}

export default LeftSidePanel;