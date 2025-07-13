import GalleryDialog from '../../gameobjects/gallery/GalleryDialog';
import { SIZE_WIN_WIDTH, SIZE_WIN_HEIGHT } from '../const';

var CreateGalleryDialog = function (scene) {
    var galleryDialog = new GalleryDialog(scene, {
        ccolumns: 3,
        cellHeight: 500,
    });
    scene.add.existing(galleryDialog);

    galleryDialog
        .setPosition(SIZE_WIN_WIDTH / 2, SIZE_WIN_HEIGHT / 2)
        .setMinSize(SIZE_WIN_WIDTH * 0.8, SIZE_WIN_HEIGHT * 0.95)
        .layout()

    return galleryDialog;
}

export default CreateGalleryDialog;