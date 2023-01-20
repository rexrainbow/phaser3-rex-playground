import { OverlapSizer } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateBackground from './CreateBackground.js';
import CreateImageDropZone from './CreateImageDropZone.js';
import CreateImageContainer from './CreateImageContainer.js';
import CreateImageFromFile from './CreateImageFromFile.js';
import WaitEvents from '../../../../../phaser3-rex-notes/plugins/waitevents.js';


class ContainerPanel extends OverlapSizer {
    constructor(scene, config) {
        super(scene, config);

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

        var containerPanel = this;
        imageDropZone.on('drop.image', function (files) {
            var newImages = [];

            var waitEvents = new WaitEvents(function () {
                for (var i = 0, cnt = newImages.length; i < cnt; i++) {
                    newImages[i].setVisible(true);
                }
                containerPanel.addImages(newImages);
            });

            for (var i = 0, cnt = files.length; i < cnt; i++) {
                var image = CreateImageFromFile(scene, files[i], waitEvents.waitCallback())
                    .setVisible(false);
                newImages.push(image);
            }
        })

        this.addChildrenMap('imageDropZone', imageDropZone);
        this.addChildrenMap('imageContainer', imageContainer);
        this.addChildrenMap('background', imageContainerBackground);

    }

    addImages(newImages) {
        var imageContainer = this.childrenMap.imageContainer;

        for (var i = 0, cnt = newImages.length; i < cnt; i++) {
            imageContainer.addImage(newImages[i]);
        }

        imageContainer
            .layout()
            .fitTo(this.displayWidth, this.displayHeight);

        this.resetChildScaleState(imageContainer);

        return this;
    }
}

export default ContainerPanel;