import Sizer from '../../../../../phaser3-rex-notes/templates/ui/sizer/Sizer.js';
import Label from '../../../../../phaser3-rex-notes/templates/ui/label/Label.js';
import {
    COLOR_PANEL_BG, COLOR_PANEL_BOARD,
} from '../../scenes/ColorPalette.js';

class ModalDialog extends Sizer {
    constructor(scene, panel) {
        var exitIcon = new Label(scene, {
            space: { left: 10, right: 20, top: 20, bottom: 20 },
            background: scene.add.rectangle(0, 0, 1, 1, COLOR_PANEL_BG).setStrokeStyle(3, COLOR_PANEL_BOARD),
            icon: scene.add.image(0, 0, 'icons', 'exit').setDisplaySize(80, 80)
        })
            .layout();
        scene.add.existing(exitIcon);

        super(scene, {
            orientation: 'x',
        })

        this
            .add(panel, {
                proportion: 1, expand: true
            })
            .add(exitIcon, {
                align: 'bottom',
                padding: { right: -exitIcon.displayWidth }
            })


        exitIcon.onClick(function () {
            this.emit('modal.requestClose');
        }, this)
    }
}

export default ModalDialog;

