import Button from '../../../../../phaser3-rex-notes/plugins/button';

var CreateInfoIcon = function (scene, size) {
    var infoIcon = scene.add.image(0, 0, 'icons', 'info').setDisplaySize(size, size);
    new Button(infoIcon)
        .on('click', function () {
            // TODO
        })

    return infoIcon;
}

export default CreateInfoIcon;