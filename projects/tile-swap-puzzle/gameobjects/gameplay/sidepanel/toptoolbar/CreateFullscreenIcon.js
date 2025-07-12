import FullscreenButton from '../../../../../../../phaser3-rex-notes/templates/ui/fullscreenbutton/FullscreenButton.js';

var CreateFullscreenIcon = function (scene, size) {
    var fullscreenIcon = scene.add.image(0, 0, 'icons', 'fullscreen-on').setDisplaySize(size, size);
    fullscreenIcon.button = new FullscreenButton(fullscreenIcon, {
        onEnter: { key: 'icons', frame: 'fullscreen-off' },
        onLeave: { key: 'icons', frame: 'fullscreen-on' },
    })

    return fullscreenIcon;
}

export default CreateFullscreenIcon;