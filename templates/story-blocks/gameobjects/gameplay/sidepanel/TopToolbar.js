import Sizer from '../../../../../../phaser3-rex-notes/templates/ui/sizer/Sizer.js';
import CreateInfoIcon from './icons/CreateInfoIcon.js';

class BottomToolbar extends Sizer {
    constructor(scene) {
        super(scene, {
            orientation: 'x',
            space: { item: 10 }
        })

        var infoIcon = CreateInfoIcon(scene, 80);

        this
            .add(infoIcon)
    }
}

export default BottomToolbar;