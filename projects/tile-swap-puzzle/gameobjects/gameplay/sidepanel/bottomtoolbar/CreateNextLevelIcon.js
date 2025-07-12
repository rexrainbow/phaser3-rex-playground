import Button from '../../../../../../../phaser3-rex-notes/plugins/button.js';

var CreateNextLevelIcon = function (scene, size) {
    var nextLevelIcon = scene.add.image(0, 0, 'icons', 'next').setDisplaySize(size, size);
    nextLevelIcon.button = new Button(nextLevelIcon)
        .on('click', function () {
            // TODO
        })

    return nextLevelIcon;
}

export default CreateNextLevelIcon;