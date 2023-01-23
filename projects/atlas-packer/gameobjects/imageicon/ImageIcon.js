import { OverlapSizer } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import FitToSize from '../../../../../phaser3-rex-notes/plugins/utils/size/FitTo.js';


class ImageIcon extends OverlapSizer {
    constructor(scene, config) {
        super(scene, config);

        var image = scene.add.image(0, 0, '');
        this.add(
            image,
            { align: 'center', expand: false }
        )

        this.addChildrenMap('image', image);
    }

    fitImage() {
        var image = this.childrenMap.image;

        var result = FitToSize(image, { width: this.displayWidth, height: this.displayHeight }, true);
        image.setDisplaySize(result.width, result.height);
        this.resetChildScaleState(image);
        return this;
    }

    resize(width, height) {
        super.resize(width, height);

        this.fitImage();
        return this;
    }

    setTexture(key, frame) {
        var image = this.childrenMap.image;

        image.setTexture(key, frame);
        this.fitImage();
        return this;
    }

}

export default ImageIcon;