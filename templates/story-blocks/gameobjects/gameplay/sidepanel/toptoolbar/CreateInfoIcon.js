import CreateIconButton from '../../../iconbutton/CreateIconButton.js';
import ConfirmActionPromise from '../../../../../../../phaser3-rex-notes/templates/ui/confirmdialog/ConfirmActionPromise.js';
import {
    COLOR_PANEL_BG, COLOR_PANEL_BOARD,
    COLOR_TITLE, COLOR_CONTENT
} from '../../../../scenes/ColorPalette.js';
import { CANVAS_FONT, CANVAS_TEST_STRING } from '../../../../scenes/Font.js';
import { InfoIcon } from '../../../../scenes/Icons.js';

const DialogStyle = {
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
            $type: 'bbcodetext',
            color: '#' + (COLOR_CONTENT).toString(16),
            fontFamily: CANVAS_FONT,
            fontSize: `40px`,
            testString: CANVAS_TEST_STRING,
            lineSpacing: 8,
        },
        wrapText: 'character',
    },

    align: {
        title: 'left',
        content: 'left',
    },

    buttonMode: 0,
};

const DialogContent = {
    title: '如何遊玩',
    content: '拖曳兩個方塊以交換它們的位置',
};

var CreateInfoIcon = function (scene, size) {
    var iconButton = CreateIconButton(scene, InfoIcon.key, InfoIcon.frame, size);

    iconButton.button
        .on('click', async function () {
            scene.pauseGame();
            await ConfirmActionPromise(scene, {
                style: DialogStyle,
                content: DialogContent
            })
            scene.resumeGame();
        })

    return iconButton;
}

export default CreateInfoIcon;