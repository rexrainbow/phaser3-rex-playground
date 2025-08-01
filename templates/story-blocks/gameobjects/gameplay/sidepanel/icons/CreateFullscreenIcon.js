import FullscreenButton from '../../../../../../../phaser3-rex-notes/templates/ui/fullscreenbutton/FullscreenButton.js';
import GetIconSetting from '../../../../scenes/utils/GetIconSetting.js';

var CreateFullscreenIcon = function (scene, size) {

    var FullscreenOnIcon = GetIconSetting(scene).FullscreenOn;
    var FullscreenOffIcon = GetIconSetting(scene).FullscreenOff;

    var fullscreenIcon = scene.add.image(0, 0, 'icons', 'fullscreen-on').setDisplaySize(size, size);
    fullscreenIcon.button = new FullscreenButton(fullscreenIcon, {
        onEnter: { key: FullscreenOnIcon.key, frame: FullscreenOnIcon.frame },
        onLeave: { key: FullscreenOffIcon.key, frame: FullscreenOffIcon.frame },
    })

    return fullscreenIcon;
}

export default CreateFullscreenIcon;