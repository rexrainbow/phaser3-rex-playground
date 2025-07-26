import ModalDialog from '../modaldialog/ModalDialog.js';
import GameplayBlock from './GameplayBlock.js';
import { WORLD } from './worldcontainer/const.js';

class GameplayDialog extends ModalDialog {
    constructor(scene) {
        var gameplayBlock = new GameplayBlock(scene);
        scene.add.existing(gameplayBlock);

        super(scene, gameplayBlock);
    }

    buildWorld() {
        this.getElement(`#${WORLD}`, true).buildWorld();
        return this;
    }
}

export default GameplayDialog;