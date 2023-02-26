import { SimpleLabel } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import SetValue from '../../../../../phaser3-rex-notes/plugins/utils/object/SetValue.js';
import CreateImageIcon from '../builders/CreateImageIcon.js';

const GetValue = Phaser.Utils.Objects.GetValue;
const Creators = {
    icon: CreateImageIcon,
}

class ImageLabel extends SimpleLabel {
    constructor(scene, config) {
        var iconSize = GetValue(config, 'iconSize');
        if (iconSize !== undefined) {
            delete config.iconSize;
        } else {
            var top = GetValue(config, 'space.top', 0);
            var bottom = GetValue(config, 'space.bottom', 0);
            var height = GetValue(config, 'height', 0);
            iconSize = height - top - bottom;
        }
        SetValue(config, 'icon.width', iconSize);
        SetValue(config, 'icon.height', iconSize);

        SetValue(config, 'wrapText', 'char');

        super(scene, config, Creators);
    }
}

export default ImageLabel;