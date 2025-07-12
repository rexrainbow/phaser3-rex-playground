import GameplayDialog from './GameplayDialog.js';
import { SIZE_WIN_WIDTH, SIZE_WIN_HEIGHT } from '../../scenes/const.js';

var CreateGameplayDialog = function (scene, levelData) {
    var gameplayDialog = new GameplayDialog(scene, levelData);
    scene.add.existing(gameplayDialog);

    return gameplayDialog
        .setPosition(SIZE_WIN_WIDTH / 2, SIZE_WIN_HEIGHT / 2)
        .setMinSize(SIZE_WIN_WIDTH * 0.8, SIZE_WIN_HEIGHT * 0.95)
        .layout()
        .modalPromise({
            cover: {
                alpha: 1
            }
        });
}

export default CreateGameplayDialog;