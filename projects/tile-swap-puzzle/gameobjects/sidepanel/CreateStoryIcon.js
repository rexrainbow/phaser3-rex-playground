import Button from '../../../../../phaser3-rex-notes/plugins/button';
import StoryDialog from '../storyblock/StoryDialog';

var CreateStoryIcon = function (scene, size) {
    var storyIcon = scene.add.image(0, 0, 'icons', 'story').setDisplaySize(size, size);
    new Button(storyIcon)
        .on('click', function () {
            var index = 0;
            var key = `sample${index}`
            var text = scene.cache.text.get(`story${index}`);

            var storyDialog = new StoryDialog(scene, key, text).layout();
            scene.add.existing(storyDialog);
            storyDialog.modalPromise({
                cover: {
                    alpha: 1
                }
            });
        })

    return storyIcon;
}


export default CreateStoryIcon;