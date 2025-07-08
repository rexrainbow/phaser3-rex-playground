import SimpleLabel from '../../../../../phaser3-rex-notes/templates/ui/simplelabel/SimpleLabel.js';
import {
    COLOR_DIALOG_BG, COLOR_DIALOG_BOARD,
    COLOR_CONTENT,
    COLOR_THUMB, COLOR_TRACK
} from '../../scenes/const.js';

class StoryBlock extends SimpleLabel {
    constructor(scene, key, text) {
        var frame = scene.textures.getFrame(key);
        var frameWidth = frame.realWidth,
            frameHeight = frame.realHeight;
        var orientation = (frameHeight >= frameWidth) ? 'x' : 'y';

        var style = {
            orientation: orientation,
            space: { left: 30, right: 30, top: 30, bottom: 30, icon: 20 },

            background: {
                color: COLOR_DIALOG_BG,
                strokeColor: COLOR_DIALOG_BOARD,
                radius: 20,
                strokeWidth: 6,
            },

            icon: { $type: 'image' },

            text: {
                $type: 'textarea',
                space: { left: 20, right: 20, top: 20, bottom: 20, text: 20, },

                text: {
                    key: 'gothic',
                    fontSize: 36,
                    tint: COLOR_CONTENT,
                },
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

            },
            expandTextWidth: true,
            expandTextHeight: true,
        }

        super(scene, style);

        this.resetDisplayContent({
            icon: key,
            text: text,
        })
    }

}

export default StoryBlock;