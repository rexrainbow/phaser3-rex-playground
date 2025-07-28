import LevelSelectorDialog from '../../gameobjects/levelselector/LevelSelectorDialog.js';
import GetWindowSize from '../utils/GetWindowSize.js';

var CreateLevelDialog = function (scene) {
    var galleryDialog = new LevelSelectorDialog(scene, {
        ccolumns: 3,
        cellHeight: 500,
    });
    scene.add.existing(galleryDialog);

    var windowSize = GetWindowSize(scene);

    galleryDialog
        .setPosition(windowSize.width / 2, windowSize.height / 2)
        .setMinSize(windowSize.width * 0.8, windowSize.height * 0.95)
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