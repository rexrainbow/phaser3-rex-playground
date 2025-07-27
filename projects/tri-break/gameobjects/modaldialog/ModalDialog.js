import Sizer from '../../../../../phaser3-rex-notes/templates/ui/sizer/Sizer.js';
import CreateIconButton from '../iconbutton/CreateIconButton.js';
import { ExitIcon } from '../../scenes/Icons.js';

const GetValue = Phaser.Utils.Objects.GetValue;

class ModalDialog extends Sizer {
    constructor(scene, panel, config) {
        super(scene, {
            orientation: 'x',
        })

        var exitIcon = CreateIconButton(scene, ExitIcon.key, ExitIcon.frame, 80)
            .layout()

        var expand = GetValue(config, 'expand', true);

        this
            .add(panel, {
                proportion: (expand) ? 1 : 0,
                expand: expand
            })
            .add(exitIcon, {
                align: 'top',
                padding: {
                    right: -exitIcon.displayWidth,
                }
            })

        exitIcon.button
            .on('click', function () {
                this.emit('modal.requestClose', null);
            }, this)
    }
}

export default ModalDialog;
