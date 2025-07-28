import CreateIconButton from '../../../iconbutton/CreateIconButton.js';
import GetIconSetting from '../../../../scenes/utils/GetIconSetting.js';

var CreateRestartIcon = function (scene, size) {

    var RestartIcon = GetIconSetting(scene).Restart;

    var iconButton = CreateIconButton(scene, RestartIcon.key, RestartIcon.frame, size);
    iconButton.button
        .on('click', function () {
            scene.startGame();
        })

    return iconButton;
}


export default CreateRestartIcon;