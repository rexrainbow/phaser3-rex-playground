import ModalDialog from '../modaldialog/ModalDialog.js';
import GameplayBlock from './GameplayBlock.js';

class GameplayDialog extends ModalDialog {
    constructor(scene, levelData) {
        var gameplayBlock = new GameplayBlock(scene, levelData);
        scene.add.existing(gameplayBlock);

        super(scene, gameplayBlock);
    }
}

export default GameplayDialog;