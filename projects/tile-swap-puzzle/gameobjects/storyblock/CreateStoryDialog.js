import StoryDialog from './StoryDialog.js';
import { SIZE_WIN_WIDTH, SIZE_WIN_HEIGHT } from '../../scenes/Size.js';

var CreateStoryDialog = function (scene, text, key) {
    var storyDialog = new StoryDialog(scene, { text, key });
    scene.add.existing(storyDialog);

    return storyDialog
        .setPosition(SIZE_WIN_WIDTH / 2, SIZE_WIN_HEIGHT / 2)
        .setMinSize(SIZE_WIN_WIDTH * 0.8, SIZE_WIN_HEIGHT * 0.95)
        .layout()
        .modalPromise({
            cover: { alpha: 1 }
        });
}

export default CreateStoryDialog;