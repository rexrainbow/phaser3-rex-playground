import Sizer from '../../../../../../../phaser3-rex-notes/templates/ui/sizer/Sizer.js';
//import CreateFileChooserIcon from './CreateFileChooserIcon.js';
import CreateInfoIcon from './CreateInfoIcon.js';
// import CreateFullscreenIcon from './CreateFullscreenIcon.js';

class BottomToolbar extends Sizer {
    constructor(scene) {
        super(scene, {
            orientation: 'x',
            space: { item: 10 }
        })

        //var fileChooserIcon = CreateFileChooserIcon(scene, 80);
        var infoIcon = CreateInfoIcon(scene, 80);
        // var fullscreenIcon = CreateFullscreenIcon(scene, 80);

        this
            //.add(fileChooserIcon)
            .add(infoIcon)
            //.add(fullscreenIcon)
    }
}

export default BottomToolbar;