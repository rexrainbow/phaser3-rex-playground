import LevelSelectorDialog from '../../gameobjects/levelselector/LevelSelectorDialog.js';
import { SIZE_WIN_WIDTH, SIZE_WIN_HEIGHT } from '../const.js';

var CreateLevelDialog = function (scene) {
    var galleryDialog = new LevelSelectorDialog(scene, {
        ccolumns: 3,
        cellHeight: 500,
    });
    scene.add.existing(galleryDialog);

    galleryDialog
        .setPosition(SIZE_WIN_WIDTH / 2, SIZE_WIN_HEIGHT / 2)
        .setMinSize(SIZE_WIN_WIDTH * 0.8, SIZE_WIN_HEIGHT * 0.95)
        .layout()

    galleryDialog
        .on('select', function (levelData) {
            if (!levelData.completed) {
                return;
            }
            galleryDialog.emit('modal.requestClose', levelData);
        })

    return galleryDialog;
}

export default CreateLevelDialog;