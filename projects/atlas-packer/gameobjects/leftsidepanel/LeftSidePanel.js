import { OverlapSizer } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateBackground from '../builders/CreateBackground.js';
import CreateImageDropZone from '../builders/CreateImageDropZone.js';
import CreateImageList from '../builders/CreateImageList.js';

class LeftSidePanel extends OverlapSizer {
    constructor(scene, config) {
        super(scene, config);
        this.model = config.model;

        // var background = CreateBackground(scene, 0x333333);
        // this.addBackground(background);

        // Can't add image drop zone below image list
        //var imageDropZone = CreateImageDropZone(scene);
        //this.addBackground(imageDropZone);

        var imageList = CreateImageList(scene, config.imageList);
        this.add(
            imageList,
            { align: 'center', expand: true }
        )

        //this.addChildrenMap('imageDropZone', imageDropZone);
        this.addChildrenMap('imageList', imageList);

        //imageDropZone.on('drop.image', function (files) {
        //    this.model.addImageFiles(this.scene, files);
        //}, this);

        this.model.on('addimages', function (imageKeys) {
            this.updateImages(this.model.imageKeys.list);
        }, this)
    }

    updateImages(imageKeys) {
        var imageList = this.childrenMap.imageList;
        imageList.setItems(imageKeys);
        return this;
    }
}

export default LeftSidePanel;