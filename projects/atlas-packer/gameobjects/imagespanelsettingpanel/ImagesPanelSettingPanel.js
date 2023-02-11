import { Tweaker } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import SetValue from '../../../../../phaser3-rex-notes/plugins/utils/object/SetValue.js';

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
                title: 'Color',
                view: 'color',
            })
            .addInput({
                bindingKey: 'outlineEnable',
                title: 'Outline',
                view: 'boolean'  // 'toggleSwitch'
            })
    }
}

export default ImagesPanelSettingPanel;