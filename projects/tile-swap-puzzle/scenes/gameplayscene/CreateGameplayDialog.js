import GameplayDialog from '../../gameobjects/gameplay/GameplayDialog.js';
import { SIZE_WIN_WIDTH, SIZE_WIN_HEIGHT } from '../const.js';

var CreateGameplayDialog = function (scene) {
    var gameplayDialog = new GameplayDialog(scene);
    scene.add.existing(gameplayDialog);

    gameplayDialog
        .setPosition(SIZE_WIN_WIDTH / 2, SIZE_WIN_HEIGHT / 2)
        .setMinSize(SIZE_WIN_WIDTH * 0.8, SIZE_WIN_HEIGHT * 0.95)
        .layout()

    console.log(SIZE_WIN_WIDTH * 0.8, gameplayDialog.width)

    return gameplayDialog;
}

export default CreateGameplayDialog;