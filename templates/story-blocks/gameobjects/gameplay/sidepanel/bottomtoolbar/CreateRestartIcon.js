import CreateIconButton from '../../../iconbutton/CreateIconButton.js';
import { RestartIcon } from '../../../../scenes/Icons.js';

var CreateRestartIcon = function (scene, size) {
    var iconButton = CreateIconButton(scene, RestartIcon.key, RestartIcon.frame, size);
    iconButton.button
        .on('click', function () {
            scene.startGame();
        })

    return iconButton;
}


export default CreateRestartIcon;