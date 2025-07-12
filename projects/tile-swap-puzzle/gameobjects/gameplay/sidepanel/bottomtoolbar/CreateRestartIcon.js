import Button from '../../../../../../../phaser3-rex-notes/plugins/button.js';

var CreateRestartIcon = function (scene, size) {
    var restartIcon = scene.add.image(0, 0, 'icons', 'restart').setDisplaySize(size, size);
    restartIcon.button = new Button(restartIcon)
        .on('click', function () {
            scene.startGame();
        })

    return restartIcon;
}


export default CreateRestartIcon;