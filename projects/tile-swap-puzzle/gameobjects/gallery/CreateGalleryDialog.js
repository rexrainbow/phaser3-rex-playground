import GalleryDialog from './GalleryDialog';
import { SIZE_WIN_WIDTH, SIZE_WIN_HEIGHT } from '../../scenes/const';

var CreateGalleryDialog = function (scene, items) {
    // items: {title, image, 'image-url', story}[]
    var galleryDialog = new GalleryDialog(scene);
    scene.add.existing(galleryDialog);

    galleryDialog.setItems(items);

    return galleryDialog
        .setPosition(SIZE_WIN_WIDTH / 2, SIZE_WIN_HEIGHT / 2)
        .setMinSize(SIZE_WIN_WIDTH * 0.8, SIZE_WIN_HEIGHT * 0.95)
        .layout()
        .modalPromise({
            cover: {
                alpha: 1
            }
        });
}

export default CreateGalleryDialog;