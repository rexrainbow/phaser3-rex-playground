import Sizer from '../../../../../phaser3-rex-notes/templates/ui/sizer/Sizer.js';
import ImageBox from '../../../../../phaser3-rex-notes/templates/ui/imagebox/ImageBox.js';
import TextArea from '../../../../../phaser3-rex-notes/templates/ui/textarea/TextArea.js';
import BBCodeText from '../../../../../phaser3-rex-notes/templates/ui/bbcodetext/BBCodeText.js';
import {
    COLOR_DIALOG_BG, COLOR_DIALOG_BOARD,
    COLOR_CONTENT,
    COLOR_THUMB, COLOR_TRACK
} from '../../scenes/const.js';

class StoryBlock extends Sizer {
    constructor(scene, key, text) {
        var background = scene.add.rectangle(0, 0, 1, 1, COLOR_DIALOG_BG).setStrokeStyle(6, COLOR_DIALOG_BOARD);

        var imageBox = new ImageBox(scene);

        var textArea = new TextArea(scene, {
            space: {
                left: 20, right: 20, 
                text: { top: 20, bottom: 20, right: 20 },
            },
            text: CreateBBCodeTextGameObject(scene, 36, COLOR_CONTENT),
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
        });
        scene.add.existing(textArea);

        super(scene, {
            space: { left: 30, right: 30, top: 30, bottom: 30, item: 20 },
        });

        this
            .addBackground(background)
            .add(imageBox, { proportion: 1, expand: true, key: 'image' })
            .add(textArea, { proportion: 1, expand: true, key: 'text' })

        this.setStoryContent(key, text);
    }

    setStoryContent(key, text) {
        var frame = this.scene.textures.getFrame(key);
        var orientation = (frame.realWidth > frame.realHeight) ? 'y' : 'x';
        this.setOrientation(orientation);
        this.getElement('image').setTexture(key);
        this.getElement('text').setText(text);
        return this;
    }

}

var CreateBitmapTextGameObject = function (scene, size, color) {
    return scene.add.bitmapText(0, 0, 'gothic', '', size).setTint(color)
}

var CreateBBCodeTextGameObject = function (scene, size, color) {
    var text = new BBCodeText(scene, 0, 0, '', {
        fontSize: `${size}px`,
        color: color,
        lineSpacing: 16,
        testString: '學'
    })
    scene.add.existing(text);
    return text;
}

export default StoryBlock;