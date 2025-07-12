import Button from '../../../../../../../phaser3-rex-notes/plugins/button.js';
import CreateStoryDialog from '../../../storyblock/CreateStoryDialog.js';

var CreateStoryIcon = function (scene, size) {
    var storyIcon = scene.add.image(0, 0, 'icons', 'story').setDisplaySize(size, size);

    var index = 0;
    new Button(storyIcon)
        .on('click', function () {
            var key = `sample${index}`
            var text = scene.cache.text.get(`story${index}`);
            CreateStoryDialog(scene, text, key);

            index = (index + 1) % 2;
        })

    return storyIcon;
}

export default CreateStoryIcon;