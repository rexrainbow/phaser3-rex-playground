import { Tweaker } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateImageIcon from '../builders/CreateImageIcon.js';
import TextTranslation from '../../../../../phaser3-rex-notes/plugins/texttranslation.js';

class ImageDataPanel extends Tweaker {
    constructor(scene, configObj, model) {
        var config = configObj.cloneValue('.');

        super(scene, {
            width: config.width, height: config.height,

            styles: config
        });

        var target = {};

        this
            .add(
                CreateImageIcon(scene),
                { proportion: 1, expand: true, key: 'image' }
            )
            .addInput(target, 'name',
                {
                    view: 'string',
                    onValidate(newValue, oldValue) {
                        return !model.hasImage(newValue);
                    },
                    onValueChange(newValue, oldValue) {
                        model.changeImageName(oldValue, newValue);
                    },
                    key: 'name'
                }
            )
            .addInput(target, 'x',
                {
                    view: 'number',
                    inputTextReadOnly: true,  // Uneditable
                    key: 'x'
                }
            )
            .addInput(target, 'y',
                {
                    view: 'number',
                    inputTextReadOnly: true,  // Uneditable
                    key: 'y'
                }
            )
            .addInput(target, 'width',
                {
                    view: 'number',
                    inputTextReadOnly: true,  // Uneditable
                    key: 'width'
                }
            )
            .addInput(target, 'height',
                {
                    view: 'number',
                    inputTextReadOnly: true,  // Uneditable
                    key: 'height'
                }
            )


        model
            .on('selectimage', function (imageData) {
                Object.assign(target, imageData);
                this.setBindingTarget(target);
            }, this)
            .on('clearimages', function () {
                Object.assign(target, { x: '', y: '', width: '', height: '', key: undefined, name: '' });
                this.setBindingTarget(target);
            }, this)
            .on('removeimage', function (imageData) {
                if (imageData.name !== target.name) {
                    return;
                }
                Object.assign(target, { x: '', y: '', width: '', height: '', key: undefined, name: '' });
                this.setBindingTarget(target);
            }, this)


        var translation = new TextTranslation(this.getElement('name.title'), {
            translationKey: 'imageData.name'
        });
        var translation = new TextTranslation(this.getElement('x.title'), {
            translationKey: 'imageData.x'
        });
        var translation = new TextTranslation(this.getElement('y.title'), {
            translationKey: 'imageData.y'
        });
        var translation = new TextTranslation(this.getElement('width.title'), {
            translationKey: 'imageData.width'
        });
        var translation = new TextTranslation(this.getElement('height.title'), {
            translationKey: 'imageData.height'
        });
    }

    setBindingTarget(imageData) {
        super.setBindingTarget(imageData);
        this.childrenMap.image.setTexture(imageData.key);
        return this;

    }
}

export default ImageDataPanel;