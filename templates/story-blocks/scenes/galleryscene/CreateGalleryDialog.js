import LevelSelectorDialog from '../../gameobjects/levelselector/LevelSelectorDialog.js';
import CreateStoryDialog from '../../gameobjects/storyblock/CreateStoryDialog.js';
import GetLocate from '../utils/GetLocate.js';
import GetLocateText from '../../utils/GetLocateText.js';
import GetWindowSize from '../utils/GetWindowSize.js';


var CreateGalleryDialog = function (scene) {
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
            if (!levelData.$completed) {
                return;
            }

            var locate = GetLocate(scene);
            var story = GetLocateText(levelData, 'story', locate)
            CreateStoryDialog(scene, story, levelData.image);
        })

    return galleryDialog;
}

export default CreateGalleryDialog;