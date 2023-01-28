import { OverlapSizer } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateBackground from '../builders/CreateBackground.js';
import CreateImageDropZone from '../builders/CreateImageDropZone.js';
import CreateImageContainer from '../builders/CreateImageContainer.js';

const GetValue = Phaser.Utils.Objects.GetValue;

class MainPanel extends OverlapSizer {
    constructor(scene, config) {
        super(scene, config);

        this.model = config.model;
        this._outlineEnable = false;

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

        this.graphics = scene.add.graphics();
        this.pin(this.graphics, false);

        this.addChildrenMap('imageDropZone', imageDropZone);
        this.addChildrenMap('imageContainer', imageContainer);
        this.addChildrenMap('background', imageContainerBackground);

        imageDropZone.on('drop.image', function (files) {
            this.model.addImageFiles(this.scene, files);
        }, this);

        this.model
            .on('addimages', function (imageKeys) {
                var scene = this.scene;
                var images = imageKeys.map(function (key) {
                    return scene.add.image(0, 0, key);
                })
                this.updateImages(images);
            }, this)
            .on('clearimages', function () {
                this.clearImages();
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
            .fitTo(this.displayWidth, this.displayHeight)

        this.resetChildScaleState(imageContainer);

        this.updateImagesOutline();

        return this;
    }

    updateImagesOutline() {
        this.graphics.clear();

        if (this.outlineEnable) {
            var imageContainer = this.childrenMap.imageContainer;
            imageContainer.drawImagesBounds(this.graphics);
        }

        return this;
    }

    // backgroundColor
    get backgroundColor() {
        var imageContainerBackground = this.childrenMap.background;
        return imageContainerBackground.fillColor;
    }

    set backgroundColor(value) {
        var imageContainerBackground = this.childrenMap.background;
        imageContainerBackground.setFillStyle(value);
    }

    // outlineEnable
    get outlineEnable() {
        return this._outlineEnable;
    }

    set outlineEnable(value) {
        if (this._outlineEnable === value) {
            return;
        }

        this._outlineEnable = value;

        this.updateImagesOutline();
    }

    // Clear images
    clearImages() {
        var imageContainer = this.childrenMap.imageContainer;

        imageContainer
            .clearImages()
            .layout()

        this.resetChildScaleState(imageContainer);

        this.updateImagesOutline();

        return this;
    }

}

export default MainPanel;