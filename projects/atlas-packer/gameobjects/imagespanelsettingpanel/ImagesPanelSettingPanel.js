import { Tweaker } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import SetValue from '../../../../../phaser3-rex-notes/plugins/utils/object/SetValue.js';

class ImagesPanelSettingPanel extends Tweaker {
    constructor(scene, configObj, model) {
        var config = {
            orientation: 0,
            styles: configObj.cloneValue('.'),
        }
        SetValue(config, 'styles.inputRow.colorInput.inputText', false);
        SetValue(config, 'styles.inputRow.colorInput.colorComponents', false);

        super(scene, config);

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