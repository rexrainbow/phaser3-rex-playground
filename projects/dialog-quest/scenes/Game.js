import DialogQuest from '../../../templates/dialog-quest/DialogQuest.js';
import Questions from './Questions.js';

class Game extends Phaser.Scene {
    constructor() {
        super({
            key: 'game'
        })

    }

    preload() {
    }

    create() {
        var dialog = DialogQuest(this, {
            questions: Questions,
        });
    }

    update() { }
}
export default Game;