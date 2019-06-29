import QuestionManager from 'phaser3-rex-plugins/plugins/quest.js';
import DataMethods from './DataMethods.js';

const EE = Phaser.Events.EventEmitter;
const GetValue = Phaser.Utils.Objects.GetValue;

class DialogQuest extends EE {
    constructor(config) {
        super();

        if (config === undefined) {
            config = {};
        }
        if (!config.quest) {
            config.quest = true;
        }

        this.dialog = GetValue(config, 'dialog', undefined);
        this.questionManager = new QuestionManager(config);

        // Attach events
        this.questionManager
            .on('quest', function (question) {                
                var choices = this.dialog.getElement('choices');
                var options = question.options, option;
                for (var i = 0, cnt = choices.length; i < cnt; i++) {
                    option = options[i];
                    if (option) {
                        this.dialog.showChoice(i);
                        this.emit('update-choice', choices[i], option);
                    } else {
                        this.dialog.hideChoice(i);
                    }
                }
                this.emit('update-dialog', this.dialog, question);
            }, this);

        this.dialog
            .on('button.click', function (button, groupName, index) {
                var eventName = (groupName === 'choices') ? 'choice' : 'action';
                this.emit(eventName, button, this.dialog);
            }, this)
    }

    start(key) {
        this.questionManager
            .restartQuest()
            .getNextQuestion(key);
        return this;
    }

    next(key) {
        this.questionManager
            .getNextQuestion(key);
        return this;
    }
}

Object.assign(
    DialogQuest.prototype,
    DataMethods,
);


export default DialogQuest;