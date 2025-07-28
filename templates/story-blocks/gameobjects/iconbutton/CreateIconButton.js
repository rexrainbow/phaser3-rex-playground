import Label from '../../../../../phaser3-rex-notes/templates/ui/label/Label.js';
import Button from '../../../../../phaser3-rex-notes/plugins/button.js';
import GetColorPalette from '../../scenes/utils/GetColorPalette.js';

var CreateIconButton = function (scene, key, frame, size) {
    var colorPalette = GetColorPalette(scene);

    var background = scene.add.rectangle(0, 0, 1, 1, colorPalette.BUTTON_BG).setStrokeStyle(3, colorPalette.BUTTON_BOARD);

    var icon = scene.add.image(0, 0, key, frame);
    if (size) {
        icon.setDisplaySize(size, size);
    }

    var iconButton = new Label(scene, {
        space: { left: 20, right: 20, top: 20, bottom: 20 },
        background: background,
        icon: icon
    })
    scene.add.existing(iconButton);

    iconButton.button = new Button(iconButton)
        .on('over', function () {
            iconButton.getElement('background').setStrokeStyle(6, colorPalette.BUTTON_HOVER_BOARD);
        })
        .on('out', function () {
            iconButton.getElement('background').setStrokeStyle(3, colorPalette.BUTTON_BOARD);
        })

    return iconButton;
}

export default CreateIconButton;