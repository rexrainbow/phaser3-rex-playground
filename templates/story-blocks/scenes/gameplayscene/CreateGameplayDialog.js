import GameplayDialog from '../../gameobjects/gameplay/GameplayDialog.js';
import GetWindowSize from '../utils/GetWindowSize.js';

var CreateGameplayDialog = function (scene, config) {
    var gameplayDialog = new GameplayDialog(scene, config);
    scene.add.existing(gameplayDialog);

    var windowSize = GetWindowSize(scene);

    gameplayDialog
        .setPosition(windowSize.width / 2, windowSize.height / 2)
        .setMinSize(windowSize.width * 0.8, windowSize.height * 0.95)
        .layout()

    return gameplayDialog;
}

export default CreateGameplayDialog;