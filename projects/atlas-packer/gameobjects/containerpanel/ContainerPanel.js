import { OverlapSizer } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateBackground from './CreateBackground.js';
import CreateImageDropZone from './CreateImageDropZone.js';
import CreateImageContainer from './CreateImageContainer.js';
import CreateImageFromFile from './CreateImageFromFile.js';
import WaitEvents from '../../../../../phaser3-rex-notes/plugins/waitevents.js';


class ContainerPanel extends OverlapSizer {
    constructor(scene, config) {
        super(scene, config);
       
        var background = CreateBackground(scene, 0x555555);
        this.addBackground(background);

        var imageDropZone = CreateImageDropZone(scene);
        this.addBackground(imageDropZone);

        var imageContainer = CreateImageContainer(scene);
        this.add(
            imageContainer,
            { align: 'center', expand: false }
        )

        var containerPanel = this;
        imageDropZone.on('drop.image', function (files) {
            var newImages = [];

            var waitEvents = new WaitEvents(function () {
                for (var i = 0, cnt = newImages.length; i < cnt; i++) {
                    newImages[i].setVisible(true);
                }
                imageContainer.layout(containerPanel.displayWidth, containerPanel.displayHeight);
            });

            for (var i = 0, cnt = files.length; i < cnt; i++) {
                var image = CreateImageFromFile(scene, files[i], waitEvents.waitCallback());
                image.setVisible(false);
                imageContainer.addLocal(image);
                newImages.push(image);
            }
        })
    }
}

export default ContainerPanel;