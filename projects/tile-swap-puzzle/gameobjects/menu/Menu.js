import Buttons from '../../../../../phaser3-rex-notes/templates/ui/buttons/Buttons.js';
import Label from '../../../../../phaser3-rex-notes/templates/ui/label/Label.js';
import {
    COLOR_PANEL_BG, COLOR_PANEL_BOARD,
    COLOR_BUTTON_BG, COLOR_BUTTON_BOARD, COLOR_BUTTON_HOVER_BOARD,
} from '../../scenes/ColorPalette.js';
import {
    CANVAS_FONT, CANVAS_TEST_STRING,
} from '../../scenes/Font.js';

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

        this
            .on('button.over', function (button, index, pointer, event) {
                button.getElement('background').setStrokeStyle(10, COLOR_BUTTON_HOVER_BOARD)
            })
            .on('button.out', function (button, index, pointer, event) {
                button.getElement('background').setStrokeStyle(5, COLOR_BUTTON_BOARD)
            })
    }
}

var CreateLabel = function (scene, name, text) {
    var label = new Label(scene, {
        space: { left: 40, right: 40, top: 20, bottom: 20 },
        background: scene.add.rectangle(0, 0, 1, 1, COLOR_BUTTON_BG).setStrokeStyle(5, COLOR_BUTTON_BOARD),
        text: scene.add.text(0, 0, text, {
            fontFamily: CANVAS_FONT,
            fontSize: `60px`,
            testString: CANVAS_TEST_STRING
        }),
        align: 'center',

        name: name
    })
    scene.add.existing(label);

    return label;
}

export default Menu;