import LevelSelectorDialog from '../../gameobjects/levelselector/LevelSelectorDialog.js';
import CreateStoryDialog from '../../gameobjects/storyblock/CreateStoryDialog.js';
import { SIZE_WIN_WIDTH, SIZE_WIN_HEIGHT } from '../Size.js';

var CreateGalleryDialog = function (scene) {
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

            CreateStoryDialog(scene, levelData.story, levelData.image);
        })

    return galleryDialog;
}

export default CreateGalleryDialog;