import { Tweaker } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import SetValue from '../../../../../phaser3-rex-notes/plugins/utils/object/SetValue.js';
import TextTranslation from '../../../../../phaser3-rex-notes/plugins/texttranslation.js';

class ImagesPanelSettingPanel extends Tweaker {
    constructor(scene, configObj, model) {
        var styles = configObj.cloneValue('.');
        // Set necessary styles
        SetValue(styles, 'inputRow.colorInput.inputText', false);
        SetValue(styles, 'inputRow.colorInput.colorComponents', false);

        super(scene, {
            orientation: 0,

            styles: styles,
        });

        this
            .addInput({
                bindingKey: 'backgroundColor',
                view: 'color',
                key: 'color'
            })
            .addInput({
                bindingKey: 'outlineEnable',
                view: 'boolean',  // 'toggleSwitch'
                key: 'outline'
            })


        var translation = new TextTranslation(this.getElement('color.title'), {
            translationKey: 'imagePanelSetting.color'
        });
        var translation = new TextTranslation(this.getElement('outline.title'), {
            translationKey: 'imagePanelSetting.outline'
        });

    }
}

export default ImagesPanelSettingPanel;