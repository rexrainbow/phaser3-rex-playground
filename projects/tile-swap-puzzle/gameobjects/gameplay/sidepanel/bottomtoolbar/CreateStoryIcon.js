import Button from '../../../../../../../phaser3-rex-notes/plugins/button.js';
import StoryDialog from '../../../storyblock/StoryDialog.js';
import { SIZE_WIN_WIDTH, SIZE_WIN_HEIGHT } from '../../../../scenes/const.js';

var CreateStoryIcon = function (scene, size) {
    var storyIcon = scene.add.image(0, 0, 'icons', 'story').setDisplaySize(size, size);

    var index = 0;
    new Button(storyIcon)
        .on('click', function () {
            var key = `sample${index}`
            var text = scene.cache.text.get(`story${index}`);
            PopupStoryDialog(scene, key, text);

            index = (index + 1) % 2;
        })

    return storyIcon;
}

var PopupStoryDialog = function (scene, key, text) {
    var storyDialog = new StoryDialog(scene, { key, text });
    scene.add.existing(storyDialog);

    storyDialog
        .setPosition(SIZE_WIN_WIDTH / 2, SIZE_WIN_HEIGHT / 2)
        .setMinSize(SIZE_WIN_WIDTH * 0.8, SIZE_WIN_HEIGHT * 0.95)
        .layout()
        .modalPromise({
            cover: {
                alpha: 1
            }
        });
}


export default CreateStoryIcon;