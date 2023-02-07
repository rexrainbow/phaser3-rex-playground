import { SimpleLabel, ConfirmDialog } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';

var CreateAboutButton = function (scene, configObj, model) {
    var config = configObj.cloneValue('.');
    var button = new SimpleLabel(scene, config);
    scene.add.existing(button);

    var dialogConfigObj = configObj.clone().setRefPath('dialog');

    button
        .resetDisplayContent({
            text: 'About'
        })
        .onClick(function () {
            var { width, height } = scene.scale;
            var dialog = CreateAboutDialog(scene, dialogConfigObj)
                .setPosition(width / 2, height / 2)
        });

    return button;
}

var CreateAboutDialog = function (scene, configObj) {
    var config = configObj.cloneValue('.');
    config.buttonMode = 1;
    var dialog = new ConfirmDialog(scene, config)
    scene.add.existing(dialog);
    dialog
        .resetDisplayContent({
            title: 'About',
            content: 'An atlas packer for phaser3 game engine.',
            buttonA: 'Close'
        })
        .layout()
        .modal()

    return dialog;
}

export default CreateAboutButton;