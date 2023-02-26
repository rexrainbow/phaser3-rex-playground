import { Container } from '../../../../../phaser3-rex-notes/templates/ui/ui-components';
import Methods from './Methods.js';
// import OnUpdateImages from './OnUpdateImages';

const List = Phaser.Structs.List;

class ImageContainer extends Container {
    constructor(scene, config, model) {
        super(scene, 0, 0, 0, 0);

        this.model = model;
        this.backgrounds = new List();
        this.images = new List();
        this.imagePadding = 1;

        this.enableLayer();

        // model.on('postupdateimages', OnUpdateImages, this);
    }

    destroy(fromScene) {
        //  This Game Object has already been destroyed
        if (!this.scene) {
            return;
        }

        this.backgrounds.removeAll();
        this.backgrounds = null;

        this.images.removeAll();
        this.images = null;

        super.destroy(fromScene);
    }

    get imageCount() {
        return this.images.length;
    }

    get empty() {
        return (this.imageCount === 0);
    }
}

Object.assign(
    ImageContainer.prototype,
    Methods,
)

export default ImageContainer;