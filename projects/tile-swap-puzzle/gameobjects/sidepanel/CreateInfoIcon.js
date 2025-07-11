import ConfirmActionButton from '../../../../../phaser3-rex-notes/templates/ui/confirmactionbutton/ConfirmActionButton.js'
import { COLOR_PANEL_BG, COLOR_PANEL_BOARD, COLOR_TITLE, COLOR_CONTENT } from '../../scenes/const.js';
import { INFO_HOW_TO_PLAY } from '../../scenes/const.js';
import { CANVAS_FONT, CANVAS_TEST_STRING } from '../../scenes/const.js';

var CreateInfoIcon = function (scene, size) {
    var dialogStyle = {
        anchor: {
            x: 'center', y: 'center'
        },

        width: 1200, height: 800,

        space: { left: 40, right: 40, top: 40, bottom: 40, title: 40, content: 40, },

        background: {
            color: COLOR_PANEL_BG,
            strokeColor: COLOR_PANEL_BOARD,
            radius: 20,
            strokeWidth: 6,
        },

        title: {
            text: {
                color: '#' + (COLOR_TITLE).toString(16),
                fontFamily: CANVAS_FONT,
                fontSize: `60px`,
                testString: CANVAS_TEST_STRING,
            },
            wrapText: true
        },

        content: {
            text: {
                color: '#' + (COLOR_CONTENT).toString(16),
                fontFamily: CANVAS_FONT,
                fontSize: `40px`,
                testString: CANVAS_TEST_STRING,
                lineSpacing: 8
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