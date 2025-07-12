import Sizer from '../../../../../../../phaser3-rex-notes/templates/ui/sizer/Sizer.js';
import CreateFileChooserIcon from './CreateFileChooserIcon.js';
import CreateInfoIcon from './CreateInfoIcon.js';
import CreateFullscreenIcon from './CreateFullscreenIcon.js';
import CreateExitIcon from './CreateExitIcon.js';

class BottomToolbar extends Sizer {
    constructor(scene) {
        super(scene, {
            orientation: 'x',
            space: { item: 20 }
        })

        var fileChooserIcon = CreateFileChooserIcon(scene, 100);
        var infoIcon = CreateInfoIcon(scene, 100);
        var fullscreenIcon = CreateFullscreenIcon(scene, 100);
        var exitIcon = CreateExitIcon(scene, 100);

        this
            .add(fileChooserIcon)
            .add(infoIcon)
            .add(fullscreenIcon)
            .add(exitIcon)
    }
}

export default BottomToolbar;