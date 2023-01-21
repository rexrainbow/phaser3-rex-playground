import { OverlapSizer } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateBackground from './CreateBackground.js';
import CreateImageDropZone from './CreateImageDropZone.js';
import CreateImageContainer from './CreateImageContainer.js';
import CreateImageFromFile from './CreateImageFromFile.js';
import GetFileName from '../../utils/GetFileName.js';
import WaitEvents from '../../../../../phaser3-rex-notes/plugins/waitevents.js';


class ContainerPanel extends OverlapSizer {
    constructor(scene, config) {
        super(scene, config);

        this.commandHub = config.commandHub;

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


        imageDropZone.on('drop.image', this.addImageFile, this);
    }

    addImageFile(files) {
        var scene = this.scene;
        var containerPanel = this;

        files = files.filter(function (file) {
            return !containerPanel.hasImage(GetFileName(file));
        });
        if (files.length === 0) {
            return this;
        }


        var newImages = [];

        var waitEvents = new WaitEvents(function () {
            for (var i = 0, cnt = newImages.length; i < cnt; i++) {
                newImages[i].setVisible(true);
            }
            containerPanel.updateImages(newImages);
        });

        for (var i = 0, cnt = files.length; i < cnt; i++) {
            var file = files[i];
            var image = CreateImageFromFile(scene, file, waitEvents.waitCallback())
                .setName(GetFileName(file))
                .setVisible(false);
            newImages.push(image);
        }

        return this;
    }

    hasImage(name) {
        var imageContainer = this.childrenMap.imageContainer;
        return imageContainer.hasImage(name);
    }

    updateImages(newImages, removeImages) {
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