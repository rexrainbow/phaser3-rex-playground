import Buttons from '../../../../../phaser3-rex-notes/templates/ui/buttons/Buttons.js';
import Label from '../../../../../phaser3-rex-notes/templates/ui/label/Label.js';
import GetColorPalette from '../../scenes/utils/GetColorPalette.js';
import GetFontSetting from '../../scenes/utils/GetFontSetting.js';
import GetLocate from '../../scenes/utils/GetLocate.js';
import GetMenuLabelText from '../../scenes/utils/GetMenuLabelText.js';

class Menu extends Buttons {
    constructor(scene) {
        var locate = GetLocate(scene);
        super(scene, {
            orientation: 'y',
            space: { item: 20 },
            buttons: [
                CreateLabel(scene, 'play', GetMenuLabelText(scene, 'play', locate)),
                CreateLabel(scene, 'level', GetMenuLabelText(scene, 'level', locate)),
                CreateLabel(scene, 'gallery', GetMenuLabelText(scene, 'gallery', locate)),
                CreateLabel(scene, 'setting', GetMenuLabelText(scene, 'setting', locate)),
                CreateLabel(scene, 'credit', GetMenuLabelText(scene, 'credit', locate)),
            ],
        })

        var colorPalette = GetColorPalette(scene);

        this
            .on('button.over', function (button, index, pointer, event) {
                button.getElement('background').setStrokeStyle(10, colorPalette.BUTTON_HOVER_BOARD)
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