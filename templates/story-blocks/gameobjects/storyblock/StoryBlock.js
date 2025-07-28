import Sizer from '../../../../../phaser3-rex-notes/templates/ui/sizer/Sizer.js';
import ImageBox from '../../../../../phaser3-rex-notes/templates/ui/imagebox/ImageBox.js';
import TextArea from '../../../../../phaser3-rex-notes/templates/ui/textarea/TextArea.js';
import BBCodeText from '../../../../../phaser3-rex-notes/templates/ui/bbcodetext/BBCodeText.js';
import GetFontSetting from '../../scenes/utils/GetFontSetting.js';
import GetColorPalette from '../../scenes/utils/GetColorPalette.js';

class StoryBlock extends Sizer {
    constructor(scene, config) {
        var colorPalette = GetColorPalette(scene);

        var key = config.key;
        var text = config.text;

        var background = scene.add.rectangle(0, 0, 1, 1, colorPalette.PANEL_BG).setStrokeStyle(6, colorPalette.PANEL_BOARD);

        var imageBox = new ImageBox(scene, { scaleUp: true });

        var textArea = new TextArea(scene, {
            space: {
                left: 20, right: 20,
                text: { top: 20, bottom: 20, right: 20 },
            },
            text: CreateBBCodeTextGameObject(scene, 36, colorPalette.CONTENT),
            slider: {
                track: {
                    color: colorPalette.TRACK,
                    alpha: 0.5,
                    width: 30,
                },
                thumb: {
                    color: colorPalette.THUMB,
                    width: 40,
                },
                adaptThumbSize: true,
            },
            mouseWheelScroller: {
                speed: 0.3
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

var CreateBBCodeTextGameObject = function (scene, size, color) {
    var fontSetting = GetFontSetting(scene);
    var text = new BBCodeText(scene, 0, 0, '', {
        fontFamily: fontSetting.family,
        fontSize: `${size}px`,
        lineSpacing: 16,
        testString: fontSetting.testString
    })
        .setTint(color);
    scene.add.existing(text);
    return text;
}

export default StoryBlock;