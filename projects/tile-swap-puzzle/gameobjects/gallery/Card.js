import Sizer from '../../../../../phaser3-rex-notes/templates/ui/sizer/Sizer.js';
import ImageBox from '../../../../../phaser3-rex-notes/templates/ui/imagebox/ImageBox.js';
import {
    CANVAS_FONT
} from '../../scenes/const.js';

class Card extends Sizer {
    constructor(scene) {
        var text = scene.add.text(0, 0, '', {
            fontFamily: CANVAS_FONT,
            fontSize: `30px`,
            testString: '學'
        })

        var imageBox = new ImageBox(scene);

        super(scene, {
            orientation: 'y',
            space: { left: 30, right: 30, top: 30, bottom: 30, item: 10 }
        })

        this
            .add(text, { key: 'text' })
            .add(imageBox, { proportion: 1, expand: true, key: 'image' })

    }

    setCardContent(title, key, unlocked) {
        var text = this.getElement('text').setText(title);
        var image = this.getElement('image').setTexture(key);
        if (!unlocked) {
            //TODO
        }
        return this;
    }
}

export default Card;