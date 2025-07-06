import FullscreenButton from '../../../../../phaser3-rex-notes/templates/ui/fullscreenbutton/FullscreenButton.js';

var CreateFullscreenIcon = function (scene, size) {
    var fullscreenIcon = scene.add.image(0, 0, 'fullscreen-on').setDisplaySize(size, size);
    new FullscreenButton(fullscreenIcon, {
        onEnter: 'fullscreen-off',
        onLeave: 'fullscreen-on',
    })

    return fullscreenIcon;
}

export default CreateFullscreenIcon;