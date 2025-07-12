import Sizer from '../../../../../../../phaser3-rex-notes/templates/ui/sizer/Sizer.js';
import CreateStoryIcon from './CreateStoryIcon.js';
import CreateRestartIcon from './CreateRestartIcon.js';
import CreateNextLevelIcon from './CreateNextLevelIcon.js';

class BottomToolbar extends Sizer {
    constructor(scene) {
        super(scene, {
            orientation: 'x',
            space: { item: 20 }
        })

        var storyIcon = CreateStoryIcon(scene, 100);
        var restartIcon = CreateRestartIcon(scene, 100);
        var nextLevelIcon = CreateNextLevelIcon(scene, 100);

        this
            .add(storyIcon)
            .add(restartIcon)
            .add(nextLevelIcon)
    }
}

export default BottomToolbar;