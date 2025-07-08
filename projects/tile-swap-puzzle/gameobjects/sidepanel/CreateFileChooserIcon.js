import FileSelectorButton from '../../../../../phaser3-rex-notes/templates/ui/fileselectorbutton/FileSelectorButton.js';


var CreateFileChooserIcon = function (scene, size) {
    var key = 'image';
    var fileChooserIcon = new FileSelectorButton(scene, {
        icon: scene.add.image(0, 0, 'icons', 'file').setDisplaySize(size, size),
        accept: 'image/*'
    })
        .on('select', async function (files, fileSelectorButton) {
            await fileSelectorButton.loadFilePromise(files[0], 'image', key);
            scene.restartGame(key);
        })

    scene.add.existing(fileChooserIcon);

    return fileChooserIcon;
}

export default CreateFileChooserIcon;