import ConfirmActionButton from '../../../../../phaser3-rex-notes/templates/ui/confirmactionbutton/ConfirmActionButton.js'
import { COLOR_DIALOG_BG, COLOR_DIALOG_BOARD, COLOR_TITLE, COLOR_CONTENT } from '../../scenes/const.js';
import { INFO_HOW_TO_PLAY } from '../../scenes/const.js';

var CreateInfoIcon = function (scene, size) {
    var dialogStyle = {
        anchor: {
            x: 'center', y: 'center'
        },

        width: 1200, height: 800,

        space: { left: 40, right: 40, top: 40, bottom: 40, title: 40, content: 40, },

        background: {
            color: COLOR_DIALOG_BG,
            strokeColor: COLOR_DIALOG_BOARD,
            radius: 20,
            strokeWidth: 6,
        },

        title: {
            text: {
                key: 'gothic',
                fontSize: 60,
                tint: COLOR_TITLE,
            },
            wrapText: true
        },

        content: {
            text: {
                key: 'gothic',
                fontSize: 40,
                tint: COLOR_CONTENT,
            },
            wrapText: true,
        },

        align: {
            title: 'left',
            content: 'left',
        },

        buttonMode: 0,
    };

    var dialogContent = {
        title: 'How to play',
        content: INFO_HOW_TO_PLAY,
    };

    var infoIcon = new ConfirmActionButton(scene, {
        icon: scene.add.image(0, 0, 'icons', 'info').setDisplaySize(size, size),

        confirmDialog: {
            style: dialogStyle,
            content: dialogContent
        }
    })
    scene.add.existing(infoIcon);

    return infoIcon;
}

export default CreateInfoIcon;