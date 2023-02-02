import { Tweaker } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateImageIcon from '../builders/CreateImageIcon.js';

class ImageDataDialog extends Tweaker {
    constructor(scene, config) {
        super(scene, config);

        this
            .add(
                CreateImageIcon(scene),
                { proportion: 1, expand: true, key: 'image' }
            )
            .addInput(
                {
                    bindingKey: 'name',
                    inputTextReadOnly: true  // Uneditable
                }
            )
            .addInput(
                {
                    bindingKey: 'x',
                    view: 'number',
                    inputTextReadOnly: true  // Uneditable
                }
            )
            .addInput(
                {
                    bindingKey: 'y',
                    view: 'number',
                    inputTextReadOnly: true  // Uneditable
                }
            )
            .addInput(
                {
                    bindingKey: 'width',
                    view: 'number',
                    inputTextReadOnly: true  // Uneditable
                }
            )
            .addInput(
                {
                    bindingKey: 'height',
                    view: 'number',
                    inputTextReadOnly: true  // Uneditable
                }
            )

    }

    setBindingTarget(imageData) {
        super.setBindingTarget(imageData);

        this.childrenMap.image.setTexture(imageData.key);

        return this;

    }
}

export default ImageDataDialog;