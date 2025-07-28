import Buttons from '../../../../../phaser3-rex-notes/templates/ui/buttons/Buttons.js';
import Label from '../../../../../phaser3-rex-notes/templates/ui/label/Label.js';
import GetColorPalette from '../../scenes/utils/GetColorPalette.js';
import GetFontSetting from '../../scenes/utils/GetFontSetting.js';

class Menu extends Buttons {
    constructor(scene) {
        super(scene, {
            orientation: 'y',
            space: { item: 20 },
            buttons: [
                CreateLabel(scene, 'play', '開始'),
                CreateLabel(scene, 'level', '選關'),
                CreateLabel(scene, 'gallery', '圖鑑'),
                CreateLabel(scene, 'setting', '設定'),
                CreateLabel(scene, 'credit', '製作群'),
            ],
        })

        var colorPalette = GetColorPalette(scene);

        this
            .on('button.over', function (button, index, pointer, event) {
                button.getElement('background').setStrokeStyle(10,colorPalette.BUTTON_HOVER_BOARD)
            })
            .on('button.out', function (button, index, pointer, event) {
                button.getElement('background').setStrokeStyle(5, colorPalette.BUTTON_BOARD)
            })
    }
}

var CreateLabel = function (scene, name, text) {
    var fontSetting = GetFontSetting(scene);
    var colorPalette = GetColorPalette(scene);

    var label = new Label(scene, {
        space: { left: 40, right: 40, top: 20, bottom: 20 },
        background: scene.add.rectangle(0, 0, 1, 1, colorPalette.BUTTON_BG).setStrokeStyle(5, colorPalette.BUTTON_BOARD),
        text: scene.add.text(0, 0, text, {
            fontFamily: fontSetting.family,
            fontSize: `60px`,
            testString: fontSetting.testString,
        }),
        align: 'center',

        name: name
    })
    scene.add.existing(label);

    return label;
}

export default Menu;