import StoryDialog from './StoryDialog.js';
import GetWindowSize from '../../scenes/utils/GetWindowSize.js';

var CreateStoryDialog = function (scene, text, key) {
    var storyDialog = new StoryDialog(scene, { text, key });
    scene.add.existing(storyDialog);

    var windowSize = GetWindowSize(scene);
    return storyDialog
        .setPosition(windowSize.width / 2, windowSize.height / 2)
        .setMinSize(windowSize.width * 0.8, windowSize.height * 0.95)
        .layout()
        .modalPromise({
            cover: { alpha: 1 }
        });
}

export default CreateStoryDialog;