import CreateDialog from '../gameobjects/CreateDialog.js';
import DialogQuest from '../../../templates/dialog-quest/DialogQuest.js';
import Questions from '../data/Questions.js';

class Game extends Phaser.Scene {
    constructor() {
        super({
            key: 'game'
        })

    }

    preload() {
    }

    create() {
        var dialog = CreateDialog(this)
            .layout();

        var quest = new DialogQuest({
            dialog: dialog,
            questions: Questions,
        })
            .on('update-dialog', function (dialog, question) {
                dialog.getElement('title').setText(question.key);
                quest.setData('nextKey', null);
            })
            .on('update-choice', function (choice, option) {
                choice
                    .setText(option.key)
                    .setData('nextKey', option.next);
            })
            .on('choice', function (choice) {
                quest.setData('nextKey', choice.getData('nextKey'));
            })
            .on('action', function (action) {

            })
            .start();
    }

    update() { }
}
export default Game;