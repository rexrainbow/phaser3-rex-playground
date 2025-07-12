import ModalDialog from '../modaldialog/ModalDialog.js';
import GalleryBlock from './GalleryBlock.js';

class GalleryDialog extends ModalDialog {
    constructor(scene, config) {
        var galleryBlock = new GalleryBlock(scene, config);
        scene.add.existing(galleryBlock);

        super(scene, galleryBlock);

        this.galleryBlock = galleryBlock;
    }

    setItems(items) {
        // items: {level, title, image, 'image-url', story, completed}[]
        this.galleryBlock.setItems(items);
        return this;
    }
}

export default GalleryDialog;