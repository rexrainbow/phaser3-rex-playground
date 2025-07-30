import CreateIconButton from '../../../iconbutton/CreateIconButton.js';
import ConfirmActionPromise from '../../../../../../../phaser3-rex-notes/templates/ui/confirmdialog/ConfirmActionPromise.js';
import GetIconSetting from '../../../../scenes/utils/GetIconSetting.js';
import GetFontSetting from '../../../../scenes/utils/GetFontSetting.js';
import GetColorPalette from '../../../../scenes/utils/GetColorPalette.js';
import GetLocate from '../../../../scenes/utils/GetLocate.js';
import GetInfoDialogText from '../../../../scenes/utils/GetInfoDialogText.js';


var CreateInfoIcon = function (scene, size) {

    var InfoIcon = GetIconSetting(scene).Info;
    var fontSetting = GetFontSetting(scene);
    var colorPalette = GetColorPalette(scene);

    var iconButton = CreateIconButton(scene, InfoIcon.key, InfoIcon.frame, size);

    var dialogStyle = {
        anchor: {
            x: 'center', y: 'center'
        },

        width: 1200, height: 800,

        space: { left: 40, right: 40, top: 40, bottom: 40, title: 40, content: 40, },

        background: {
            color: colorPalette.PANEL_BG,
            strokeColor: colorPalette.PANEL_BOARD,
            radius: 20,
            strokeWidth: 6,
        },

        title: {
            text: {
                color: '#' + (colorPalette.TITLE).toString(16),
                fontFamily: fontSetting.family,
                fontSize: `60px`,
                testString: fontSetting.testString,
            },
            wrapText: true
        },

        content: {
            text: {
                $type: 'bbcodetext',
                color: '#' + (colorPalette.CONTENT).toString(16),
                fontFamily: fontSetting.family,
                fontSize: `40px`,
                testString: fontSetting.testString,
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

    var locate = GetLocate(scene);
    var dialogContent = {
        title: GetInfoDialogText(scene, 'title', locate),
        content: GetInfoDialogText(scene, 'content', locate),
    };

    iconButton.button
        .on('click', async function () {
            scene.pauseGame();
            await ConfirmActionPromise(scene, {
                style: dialogStyle,
                content: dialogContent
            })
            scene.resumeGame();
        })

    return iconButton;
}

export default CreateInfoIcon;