import Sizer from '../../../../../phaser3-rex-notes/templates/ui/sizer/Sizer.js';
import LazyLoadImageBox from '../../../../../phaser3-rex-notes/templates/lazyloadimagebox/LazyLoadImageBox.js';
import RoundRectangle from '../../../../../phaser3-rex-notes/plugins/roundrectangle.js';
import {
    COLOR_BUTTON_BG, COLOR_BUTTON_BOARD,
} from '../../scenes/ColorPalette.js';
import {
    CANVAS_FONT, CANVAS_TEST_STRING,
} from '../../scenes/const.js';

class Card extends Sizer {
    constructor(scene) {
        var background = new RoundRectangle(scene, {
            color: COLOR_BUTTON_BG,
            strokeWidth: 5,
            strokeColor: COLOR_BUTTON_BOARD,
            radius: -40
        })
        scene.add.existing(background);

        var text = scene.add.text(0, 0, '', {
            fontFamily: CANVAS_FONT,
            fontSize: `40px`,
            testString: CANVAS_TEST_STRING
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

    setCardContent(title, key, url) {
        var text = this.getElement('text').setText(title);
        var image = this.getElement('image').setTexture(key, undefined, url); // Lazy-load
        return this;
    }
}

export default Card;