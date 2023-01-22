import { OverlapSizer } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateBackground from '../builders/CreateBackground.js';
import CreateImageDropZone from '../builders/CreateImageDropZone.js';
import CreateImageContainer from '../builders/CreateImageContainer.js';
// import CreateImageFromFile from '../builders/CreateImageFromFile.js';
import GetFileName from '../../utils/GetFileName.js';
import WaitEvents from '../../../../../phaser3-rex-notes/plugins/waitevents.js';


class ContainerPanel extends OverlapSizer {
    constructor(scene, config) {
        super(scene, config);

        this.model = config.model;

        var background = CreateBackground(scene, 0x333333);
        this.addBackground(background);

        var imageDropZone = CreateImageDropZone(scene);
        this.addBackground(imageDropZone);

        var imageContainer = CreateImageContainer(scene);
        this.add(
            imageContainer,
            { align: 'center', expand: false }
        )

        var imageContainerBackground = CreateBackground(scene, 0x555555);
        imageContainer.addBackground(imageContainerBackground);

        this.addChildrenMap('imageDropZone', imageDropZone);
        this.addChildrenMap('imageContainer', imageContainer);
        this.addChildrenMap('background', imageContainerBackground);

        imageDropZone.on('drop.image', function (files) {
            this.model.addImageFiles(this.scene, files);
        }, this);

        this.model.on('addimages', function (imageKeys) {
            var scene = this.scene;
            var images = imageKeys.map(function (key) {
                return scene.add.image(0, 0, key);
            })
            this.updateImages(images);
        }, this)
    }

    updateImages(newImages, removeImages) {
        // newImages, removeImages : Array of Image game object
        if (!newImages && !removeImages) {
            return this;
        }

        var imageContainer = this.childrenMap.imageContainer;

        if (newImages) {
            if (!Array.isArray(newImages)) {
                newImages = [newImages];
            }

            for (var i = 0, cnt = newImages.length; i < cnt; i++) {
                imageContainer.addImage(newImages[i]);
            }
        }

        if (removeImages) {
            if (!Array.isArray(removeImages)) {
                removeImages = [removeImages];
            }

            for (var i = 0, cnt = removeImages.length; i < cnt; i++) {
                imageContainer.removeImage(removeImages[i]);
            }
        }

        imageContainer
            .layout()
            .fitTo(this.displayWidth, this.displayHeight);

        this.resetChildScaleState(imageContainer);

        return this;
    }
}



export default ContainerPanel;