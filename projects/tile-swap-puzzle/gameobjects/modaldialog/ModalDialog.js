import Sizer from '../../../../../phaser3-rex-notes/templates/ui/sizer/Sizer.js';
import Label from '../../../../../phaser3-rex-notes/templates/ui/label/Label.js';
import {
    COLOR_BUTTON_BG, COLOR_BUTTON_BOARD,
} from '../../scenes/ColorPalette.js';

const GetValue = Phaser.Utils.Objects.GetValue;

class ModalDialog extends Sizer {
    constructor(scene, panel, config) {
        var exitIcon = new Label(scene, {
            space: { left: 10, right: 20, top: 20, bottom: 20 },
            background: scene.add.rectangle(0, 0, 1, 1, COLOR_BUTTON_BG).setStrokeStyle(3, COLOR_BUTTON_BOARD),
            icon: scene.add.image(0, 0, 'icons', 'exit').setDisplaySize(80, 80)
        })
            .layout();
        scene.add.existing(exitIcon);

        super(scene, {
            orientation: 'x',
        })

        var expand = GetValue(config, 'expand', true);

        this
            .add(panel, {
                proportion: (expand) ? 1 : 0,
                expand: expand
            })
            .add(exitIcon, {
                align: 'bottom',
                padding: {
                    right: -exitIcon.displayWidth,
                    bottom: 60
                }
            })


        exitIcon.onClick(function () {
            this.emit('modal.requestClose', null);
        }, this)
    }
}

export default ModalDialog;

