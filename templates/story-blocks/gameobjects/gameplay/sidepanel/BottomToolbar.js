import Sizer from '../../../../../../phaser3-rex-notes/templates/ui/sizer/Sizer.js';
import CreateStoryIcon from './icons/CreateStoryIcon.js';
import CreateRestartIcon from './icons/CreateRestartIcon.js';
import CreateNextLevelIcon from './icons/CreateNextLevelIcon.js';

class BottomToolbar extends Sizer {
    constructor(scene) {
        super(scene, {
            orientation: 'x',
            space: { item: 10 }
        })

        var storyIcon = CreateStoryIcon(scene, 80);
        var restartIcon = CreateRestartIcon(scene, 80);
        var nextLevelIcon = CreateNextLevelIcon(scene, 80);

        this
            .add(storyIcon)
            .add(restartIcon)
            .add(nextLevelIcon)
    }
}

export default BottomToolbar;