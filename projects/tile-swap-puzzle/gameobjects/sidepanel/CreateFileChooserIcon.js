import Button from '../../../../../phaser3-rex-notes/plugins/button';

var CreateFileChooserIcon = function (scene, size) {
    var fileChooserIcon = scene.add.image(0, 0, 'icons', 'file').setDisplaySize(size, size);
    new Button(fileChooserIcon)
        .on('click', function () {
            // TODO
        })

    return fileChooserIcon;
}

export default CreateFileChooserIcon;