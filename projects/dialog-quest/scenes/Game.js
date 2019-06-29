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
        dialog.clearChoices = function () {
            dialog.forEachChoice(function (choice) {
                choice.getElement('background').setStrokeStyle();
            });
            return dialog;
        }

        var quest = new DialogQuest({
            dialog: dialog,
            questions: Questions,
        });
        quest
            .on('update-choice', function (choice, option) {
                choice
                    .setText(option.key)
                    .setData('nextKey', option.next);
            })
            .on('update-dialog', function (dialog, question) {
                dialog.getElement('title').setText(question.key);
                dialog.getElement('actions')[0].setText((question.end) ? 'End' : 'Next')
                quest.setData('nextKey', null);
                dialog
                    .clearChoices()
                    .layout();
            })
            .on('choice', function (choice, dialog) {
                dialog.clearChoices();
                choice.getElement('background').setStrokeStyle(1, 0xffffff);
                quest.setData('nextKey', choice.getData('nextKey'));
            })
            .on('action', function (action) {
                if (action.text === 'Next') {
                    var nextKey = quest.getData('nextKey');
                    if (nextKey !== null) {
                        quest.next(nextKey);
                    }
                }
            })
            .start();
    }

    update() { }
}
export default Game;