import { Label } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateBackground from '../builders/CreateBackground.js';
import CreateImageIcon from '../builders/CreateImageIcon.js';

class ImageLabel extends Label {
    constructor(scene, config) {
        if (config === undefined) {
            config = {};
        }

        if (config.hasOwnProperty('background')) {
            config = { ...config };
            config.background = CreateBackground(scene, config.background);
        }

        config.icon = CreateImageIcon(scene);
        config.squareFitIcon = true;

        config.text = scene.add.text(0, 0, '');

        super(scene, config);
    }
}

export default ImageLabel;