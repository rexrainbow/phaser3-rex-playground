import Sizer from '../../../../../phaser3-rex-notes/templates/ui/sizer/Sizer.js';
import ImageBox from '../../../../../phaser3-rex-notes/plugins/imagebox.js';
import TextArea from '../../../../../phaser3-rex-notes/templates/ui/textarea/TextArea.js';
import {
    COLOR_DIALOG_BG, COLOR_DIALOG_BOARD,
    COLOR_CONTENT,
    COLOR_THUMB, COLOR_TRACK
} from '../../scenes/const.js';

class StoryBlock extends Sizer {
    constructor(scene, key, text) {
        var background = scene.add.rectangle(0, 0, 1, 1, COLOR_DIALOG_BG).setStrokeStyle(6, COLOR_DIALOG_BOARD);

        var image = scene.add.image(0, 0, key);
        var imageBox = new ImageBox(scene, {
            image: image
        });

        var orientation = (image.height >= image.width) ? 'x' : 'y';

        var textArea = new TextArea(scene, {
            space: { left: 20, right: 20, top: 20, bottom: 20, text: 20, },
            text: scene.add.bitmapText(0, 0, 'gothic', '', 36).setTint(COLOR_CONTENT),
            slider: {
                track: {
                    color: COLOR_TRACK,
                    alpha: 0.5,
                    width: 30,
                },
                thumb: {
                    color: COLOR_THUMB,
                    width: 40,
                },
                adaptThumbSize: true,
            },
            alwaysScrollable: false,

            content: text,
        });
        scene.add.existing(textArea);

        super(scene, {
            orientation: orientation,
            space: { left: 30, right: 30, top: 30, bottom: 30, item: 20 },
        });

        this
            .addBackground(background)
            .add(imageBox, { proportion: 1, expand: true })
            .add(textArea, { proportion: 1, expand: true })
    }

}

export default StoryBlock;