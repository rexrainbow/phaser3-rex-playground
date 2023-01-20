import ContainerLite from '../../../../../phaser3-rex-notes/plugins/containerlite.js';
import Methods from './Methods.js';

const List = Phaser.Structs.List;

class ImageContainer extends ContainerLite {
    constructor(scene) {
        super(scene);

        this.backgrounds = new List();
        this.images = new List();
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

}

Object.assign(
    ImageContainer.prototype,
    Methods,
)

export default ImageContainer;