import ModalDialog from '../modaldialog/ModalDialog.js';
import GameplayBlock from './GameplayBlock.js';

class GameplayDialog extends ModalDialog {
    constructor(scene, config) {
        var gameplayBlock = new GameplayBlock(scene, config);
        scene.add.existing(gameplayBlock);

        super(scene, gameplayBlock);
    }
}

export default GameplayDialog;