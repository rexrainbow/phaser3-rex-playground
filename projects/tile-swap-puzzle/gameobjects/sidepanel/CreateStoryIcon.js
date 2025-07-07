import Button from '../../../../../phaser3-rex-notes/plugins/button';

var CreateStoryIcon = function (scene, size) {
    var storyIcon = scene.add.image(0, 0, 'icons', 'story').setDisplaySize(size, size);
    new Button(storyIcon)
        .on('click', function () {
            // TODO
        })

    return storyIcon;
}


export default CreateStoryIcon;