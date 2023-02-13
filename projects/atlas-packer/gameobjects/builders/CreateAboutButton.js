import { SimpleLabel, ConfirmDialog } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';

var CreateAboutButton = function (scene, configObj, model) {
    var config = configObj.cloneValue('.');
    var button = new SimpleLabel(scene, config);
    scene.add.existing(button);

    var dialogConfigObj = configObj.clone().setRefPath('dialog');

    button
        .resetDisplayContent({
            icon: 'sprites', iconFrame: 'info',
            text: 'About'
        })
        .onClick(function () {
            var { width, height } = scene.scale;
            var dialog = CreateAboutDialog(scene, dialogConfigObj)
                .setPosition(width / 2, height / 2)
                .layout()

            var topSizer = button.getTopmostSizer();
            topSizer.broadcastEvent('modal.open');
            dialog.modalPromise()
                .then(function () {
                    topSizer.broadcastEvent('modal.close');
                });


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
            content: AboutDialogContent,
            buttonA: 'Close'
        })

    return dialog;
}

const AboutDialogContent = `\
An atlas packer for phaser3 game engine.

Libraries:
- [u][url=https://github.com/photonstorm/phaser]Phaser3 game engine[/url][/u]
- [u][url=https://rexrainbow.github.io/phaser3-rex-notes/docs/site/ui-overview/]RexUI[/url][/u]
- [u][url=https://github.com/mapbox/potpack]potpack[/url][/u]

[u][url=https://github.com/rexrainbow/phaser3-rex-playground/tree/master/projects/atlas-packer]Source code[/url][/u]`

export default CreateAboutButton;