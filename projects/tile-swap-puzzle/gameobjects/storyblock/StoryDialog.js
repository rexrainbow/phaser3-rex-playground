import Sizer from '../../../../../phaser3-rex-notes/templates/ui/sizer/Sizer.js';
import Label from '../../../../../phaser3-rex-notes/templates/ui/label/Label.js';
import StoryBlock from './StoryBlock.js';
import {
    COLOR_DIALOG_BG, COLOR_DIALOG_BOARD,
} from '../../scenes/const.js';

class StoryDialog extends Sizer {
    constructor(scene, key, text) {
        var storyBlock = new StoryBlock(scene, key, text);
        scene.add.existing(storyBlock);

        var exitIcon = new Label(scene, {
            space: { left: 10, right: 20, top: 20, bottom: 20 },
            background: scene.add.rectangle(0, 0, 1, 1, COLOR_DIALOG_BG).setStrokeStyle(3, COLOR_DIALOG_BOARD),
            icon: scene.add.image(0, 0, 'icons', 'exit').setDisplaySize(60, 60)
        })
            .layout();
        scene.add.existing(exitIcon);

        super(scene, {
            orientation: 'x',
            anchor: {
                x: 'center', y: 'center',
                width: '80%', height: '95%'
            },
        })

        this
            .add(storyBlock, {
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

export default StoryDialog;