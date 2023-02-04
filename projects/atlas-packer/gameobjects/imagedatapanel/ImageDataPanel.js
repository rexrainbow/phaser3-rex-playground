import { Tweaker } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateImageIcon from '../builders/CreateImageIcon.js';

class ImageDataPanel extends Tweaker {
    constructor(scene, config, model) {
        if (config === undefined) {
            config = {};
        }
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
                }
            )
            .addInput(target, 'x',
                {
                    view: 'number',
                    inputTextReadOnly: true  // Uneditable
                }
            )
            .addInput(target, 'y',
                {
                    view: 'number',
                    inputTextReadOnly: true  // Uneditable
                }
            )
            .addInput(target, 'width',
                {
                    view: 'number',
                    inputTextReadOnly: true  // Uneditable
                }
            )
            .addInput(target, 'height',
                {
                    view: 'number',
                    inputTextReadOnly: true  // Uneditable
                }
            )


        model
            .on('selectimage', function (imageData) {
                Object.assign(target, imageData);
                this.setBindingTarget(target);
            }, this)
            .on('clearimages', function () {
                Object.assign(target, { x: '', y: '', width: '', height: '' });
                this.setBindingTarget(target);
            }, this)

    }

    setBindingTarget(imageData) {
        super.setBindingTarget(imageData);
        this.childrenMap.image.setTexture(imageData.key);
        return this;

    }
}

export default ImageDataPanel;