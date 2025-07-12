import ModalDialog from '../modaldialog/ModalDialog.js';
import StoryBlock from './StoryBlock.js';

class StoryDialog extends ModalDialog {
    constructor(scene, config) {
        var storyBlock = new StoryBlock(scene, config);
        scene.add.existing(storyBlock);

        super(scene, storyBlock);
    }
}

export default StoryDialog;