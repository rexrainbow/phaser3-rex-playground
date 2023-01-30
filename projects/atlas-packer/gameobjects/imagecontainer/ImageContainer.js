import ContainerLite from '../../../../../phaser3-rex-notes/plugins/containerlite.js';
import Methods from './Methods.js';

const List = Phaser.Structs.List;

class ImageContainer extends ContainerLite {
    constructor(scene, config) {
        super(scene);

        this.model = config.model;
        this.backgrounds = new List();
        this.images = new List();
        this.imagePadding = 1;

        this.enableLayer();
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

    get empty() {
        return (this.images.length === 0);
    }
}

Object.assign(
    ImageContainer.prototype,
    Methods,
)

export default ImageContainer;