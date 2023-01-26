import { OverlapSizer } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateBackground from '../builders/CreateBackground.js';
import CreateImageDropZone from '../builders/CreateImageDropZone.js';
import CreateImageContainer from '../builders/CreateImageContainer.js';
import Methods from './Methods.js';

const GetValue = Phaser.Utils.Objects.GetValue;

class ContentPanel extends OverlapSizer {
    constructor(scene, config) {
        super(scene, config);

        this.model = config.model;

        var backgroundColor = GetValue(config, 'backgroundColor', 0x333333);
        var background = CreateBackground(scene, backgroundColor);
        this.addBackground(background);

        var imageDropZone = CreateImageDropZone(scene);
        this.addBackground(imageDropZone);

        var imageContainer = CreateImageContainer(scene);
        this.add(
            imageContainer,
            { align: 'center', expand: false }
        )

        var imageBackgroundColor = GetValue(config, 'imageBackgroundColor', 0x555555);
        var imageContainerBackground = CreateBackground(scene, imageBackgroundColor);
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
}

Object.assign(
    ContentPanel.prototype,
    Methods,
)


export default ContentPanel;