import ModalDialog from '../modaldialog/ModalDialog.js';
import GalleryBlock from './GalleryBlock.js';

class GalleryDialog extends ModalDialog {
    constructor(scene) {
        var galleryBlock = new GalleryBlock(scene);
        scene.add.existing(galleryBlock);

        super(scene, galleryBlock);

        this.galleryBlock = galleryBlock;
    }

    setItems(items) {
        // items: {title, image, 'image-url'}[]
        this.galleryBlock.setItems(items);
        return this;
    }
}

export default GalleryDialog;