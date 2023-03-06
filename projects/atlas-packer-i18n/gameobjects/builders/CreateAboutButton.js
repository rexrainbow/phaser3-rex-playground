import { SimpleLabel, ConfirmDialog } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import TextTranslation from '../../../../../phaser3-rex-notes/plugins/texttranslation.js';

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
            topSizer.emit('modal.open');
            dialog.modalPromise()
                .then(function () {
                    topSizer.emit('modal.close');
                });
        })
        .on('pointerover', function () {
            button.setHoverState(true);
        })
        .on('pointerout', function () {
            button.setHoverState(false);
        })

    var translation = new TextTranslation(button, {
        translationKey: 'about'
    });

    return button;
}

var CreateAboutDialog = function (scene, configObj) {
    var config = configObj.cloneValue('.');
    config.buttonMode = 1;
    var dialog = new ConfirmDialog(scene, config)
    scene.add.existing(dialog);

    dialog.resetDisplayContent();

    var translation = new TextTranslation(dialog.getElement('title'), {
        translationKey: 'about-dialog.title'
    });

    var translation = new TextTranslation(dialog.getElement('content'), {
        translationKey: 'about-dialog.content'
    });

    var translation = new TextTranslation(dialog.getElement('buttonA'), {
        translationKey: 'about-dialog.close'
    });

    return dialog;
}

const AboutDialogContent = `\
An atlas packer for phaser3 game engine.

Libraries:
- [u][url=https://github.com/photonstorm/phaser]Phaser3 game engine[/url][/u]
- [u][url=https://rexrainbow.github.io/phaser3-rex-notes/docs/site/ui-overview/]RexUI[/url][/u]
- [u][url=https://github.com/mapbox/potpack]potpack[/url][/u]

[u][url=https://github.com/rexrainbow/phaser3-rex-playground/tree/master/projects/atlas-packer-i18n]Source code[/url][/u]`

export default CreateAboutButton;