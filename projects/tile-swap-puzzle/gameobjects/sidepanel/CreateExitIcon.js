import Button from '../../../../../phaser3-rex-notes/plugins/button';

var CreateExitIcon = function (scene, size) {
    var exitIcon = scene.add.image(0, 0, 'icons', 'exit').setDisplaySize(size, size);
    exitIcon.button = new Button(exitIcon)
        .on('click', function () {
            scene.goToMenuScene();
        })

    return exitIcon;
}

export default CreateExitIcon;