import { Label, WrapExpandText } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import DeepClone from '../../../../../phaser3-rex-notes/plugins/utils/object/DeepClone.js';
import SetValue from '../../../../../phaser3-rex-notes/plugins/utils/object/SetValue.js';
import CreateBackground from '../builders/CreateBackground.js';
import CreateImageIcon from '../builders/CreateImageIcon.js';
import CreateText from '../builders/CreateText.js';

const GetValue = Phaser.Utils.Objects.GetValue;

class ImageLabel extends Label {
    constructor(scene, config) {
        config = (config) ? DeepClone(config) : {};

        if (config.hasOwnProperty('background')) {
            config.background = CreateBackground(scene, config.background);
        }

        var iconSize = config.iconSize;
        if (iconSize !== undefined) {
            delete config.iconSize;
        } else {
            var top = GetValue(config, 'space.top', 0);
            var bottom = GetValue(config, 'space.bottom', 0);
            var height = GetValue(config, 'height', 0);
            iconSize = height - top - bottom;
        }

        config.icon = CreateImageIcon(scene, {
            width: iconSize, height: iconSize
        });

        SetValue(config, 'text.wrap.mode', 'char');
        config.text = WrapExpandText(CreateText(scene, config.text));
        config.expandTextWidth = true;

        super(scene, config);
    }
}

export default ImageLabel;