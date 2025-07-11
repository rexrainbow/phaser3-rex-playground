import ModalDialog from '../modaldialog/ModalDialog.js';
import StoryBlock from './StoryBlock.js';

class StoryDialog extends ModalDialog {
    constructor(scene, key, text) {
        var storyBlock = new StoryBlock(scene, key, text);
        scene.add.existing(storyBlock);

        super(scene, storyBlock);
    }
}

export default StoryDialog;