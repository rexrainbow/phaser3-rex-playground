import Sizer from '../../../../../phaser3-rex-notes/templates/ui/sizer/Sizer.js';
import LazyLoadImageBox from '../../../../../phaser3-rex-notes/templates/lazyloadimagebox/LazyLoadImageBox.js';
import RoundRectangle from '../../../../../phaser3-rex-notes/plugins/roundrectangle.js';
import GetFontSetting from '../../scenes/utils/GetFontSetting.js';
import GetColorPalette from '../../scenes/utils/GetColorPalette.js';

class Card extends Sizer {
    constructor(scene) {
        var colorPalette = GetColorPalette(scene);

        var background = new RoundRectangle(scene, {
            color: colorPalette.BUTTON_BG,
            strokeWidth: 5,
            strokeColor: colorPalette.BUTTON_BOARD,
            radius: -40
        })
        scene.add.existing(background);

        var fontSetting = GetFontSetting(scene);
        var text = scene.add.text(0, 0, '', {
            fontFamily: fontSetting.family,
            fontSize: `40px`,
            testString: fontSetting.testString,
        })

        var imageBox = new LazyLoadImageBox(scene, { scaleUp: true });
        scene.add.existing(imageBox)

        super(scene, {
            orientation: 'y',
            space: { left: 40, right: 40, top: 40, bottom: 40, item: 20 }
        })

        this
            .addBackground(background, undefined, 'background')
            .add(text, { key: 'text' })
            .add(imageBox, { proportion: 1, expand: true, key: 'image' })

    }

    setCardContent(title, key, url, unlocked) {
        var text = this.getElement('text').setText(title);
        var image = this.getElement('image').setTexture(key, undefined, url); // Lazy-load
        image.setTint((unlocked) ? 0xFFFFFF : 0x222222);
        return this;
    }
}

export default Card;