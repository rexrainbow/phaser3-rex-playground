import CreateIconButton from '../../../iconbutton/CreateIconButton.js';

var CreateRestartIcon = function (scene, size) {
    var iconButton = CreateIconButton(scene, 'icons', 'restart', size);
    iconButton.button
        .on('click', function () {
            scene.startGame();
        })

    return iconButton;
}


export default CreateRestartIcon;