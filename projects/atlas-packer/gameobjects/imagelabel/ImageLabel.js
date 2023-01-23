import { Label } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateBackground from '../builders/CreateBackground.js';
import CreateImageIcon from '../builders/CreateImageIcon.js';

class ImageLabel extends Label {
    constructor(scene, config) {
        if (config === undefined) {
            config = {};
        }

        if (config.hasOwnProperty('background')) {
            config.background = CreateBackground(scene, config.background);
        }
        config.icon = CreateImageIcon(scene);
        config.text = scene.add.text(0, 0, '');

        super(scene, config);
    }

    setTexture(key, frame) {
        super.setTexture(key, frame);
        this.setText(key);
        return this;
    }

    preLayout() {
        var icon = this.childrenMap.icon;
        icon.resize(1, 1);
    }

    postResolveSize(width, height) {
        var icon = this.childrenMap.icon;
        var size = height
            - this.getInnerPadding('top') - this.getInnerPadding('bottom')
            - this.getChildOuterPadding(icon, 'top') - this.getChildOuterPadding(icon, 'bottom');
        icon
            .setMinSize(size, size)
            .resize(size, size)

        // Recalculate proportionLength
        this.proportionLength = undefined;
        this._childrenWidth = undefined;
        this.resolveWidth(width, true);
    }
}

export default ImageLabel;