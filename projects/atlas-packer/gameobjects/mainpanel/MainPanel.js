import { OverlapSizer } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateBackground from '../../../../../phaser3-rex-notes/templates/ui/utils/build/CreateBackground.js';
import CreateImageDropZone from '../builders/CreateImageDropZone.js';
import CreateImageContainer from '../builders/CreateImageContainer.js';
import Methods from './Methods.js';
// import OnUpdateImages from './OnUpdateImages.js';

const GetValue = Phaser.Utils.Objects.GetValue;

class MainPanel extends OverlapSizer {
    constructor(scene, configObj, model) {
        var config = configObj.cloneValue('.');

        super(scene, config);

        // Background
        var background = CreateBackground(scene, {
            color: GetValue(config, 'backgroundColor', 0x333333)
        });
        this.addBackground(background);

        // Image drop zone
        var imageDropZone = CreateImageDropZone(scene);
        this.addBackground(imageDropZone);

        // Image container
        var imageContainer = CreateImageContainer(scene, undefined, model);
        this.add(
            imageContainer,
            { align: 'center', expand: false }
        )

        var imageContainerBackground = CreateBackground(scene, {
            color: GetValue(config, 'imageBackgroundColor', 0x555555)
        });
        imageContainer.addBackground(imageContainerBackground);

        // Outline graphics
        this._outlineEnable = false;
        this.outlineStyle = {
            color: GetValue(config, 'outlineColor')
        }
        var outlineGraphics = scene.add.graphics();
        this.pin(outlineGraphics, false);

        // image marker graphics
        this.markedImageData = null;
        this.imageMarkerStyle = {
            color: GetValue(config, 'imageMarkerStrokeColor', 0xff0000),
            lineWidth: GetValue(config, 'imageMarkerStrokeLineWidth', 3),
            fillColor: GetValue(config, 'imageMarkerFillColor', 0x333333),
            fillAlpha: GetValue(config, 'imageMarkerFillAlpha', 0.5),
        }
        var imageMarkerGraphics = scene.add.graphics();
        this.pin(imageMarkerGraphics, false);

        // PlaceHolder text
        var placeHolderContent = 'Drag & drop \n* image files, or\n* an image with atlas json files \nhere';
        var placeHolderStyle = GetValue(config, 'placeHolder');
        var placeholder = scene.add.text(0, 0, placeHolderContent, placeHolderStyle).setOrigin(0.5);
        this.add(
            placeholder,
            { align: 'center', expand: false }
        )

        this.addChildrenMap('imageDropZone', imageDropZone);
        this.addChildrenMap('imageContainer', imageContainer);
        this.addChildrenMap('background', imageContainerBackground);
        this.addChildrenMap('placeholder', placeholder);
        this.addChildrenMap('outline', outlineGraphics);
        this.addChildrenMap('imageMarker', imageMarkerGraphics);

        imageDropZone
            .on('drop.image', function (files) {
                model.addImageFiles(files);
            })
            .on('drop.atlas', function (files) {
                model.addAtlasFiles(files);
            })

        model
            .on('addimages', function (newImageDataArray, imageDataArray) {
                this
                    .updateImages(newImageDataArray)
                    .updateImageDataArray(imageDataArray);
            }, this)
            .on('clearimages', function () {
                this.updateImages(undefined, true);
            }, this)
            .on('removeimage', function (imageData) {
                this.updateImages(undefined, imageData);
            }, this)

            .on('renameimage', function (newName, oldName) {
                this.renameImage(oldName, newName);
            }, this)
            .on('selectimage', function (imageData) {
                this.drawImageMarker(imageData);
            }, this)

        // model.on('postupdateimages', OnUpdateImages, this)

    }

    // imagePadding
    get imagePadding() {
        var imageContainer = this.childrenMap.imageContainer;
        return imageContainer.imagePadding;
    }

    set imagePadding(value) {
        var imageContainer = this.childrenMap.imageContainer;
        imageContainer.imagePadding = value;
        this.updateImages();
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

        this.drawImagesOutline();
    }

    get imageCount() {
        return this.childrenMap.imageContainer.imageCount;
    }

    get textureWidth() {
        return this.childrenMap.imageContainer.width;
    }

    get textureHeight() {
        return this.childrenMap.imageContainer.height;
    }
}

Object.assign(
    MainPanel.prototype,
    Methods,
)

export default MainPanel;