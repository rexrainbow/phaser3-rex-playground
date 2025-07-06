import Sizer from '../../../../../phaser3-rex-notes/templates/ui/sizer/Sizer.js';
import CreateRestartIcon from './CreateRestartIcon.js';
import CreateFullscreenIcon from './CreateFullscreenIcon.js';

class Toolbar extends Sizer {
    constructor(scene) {
        super(scene, {
            orientation: 'x',
            space: { item: 20 }
        })

        var restartIcon = CreateRestartIcon(scene, 100);

        var fullscreenIcon = CreateFullscreenIcon(scene, 100);

        this
            .add(restartIcon)
            .add(fullscreenIcon)
    }
}

export default Toolbar;