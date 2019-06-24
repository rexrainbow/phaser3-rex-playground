import QuestionManager from 'phaser3-rex-plugins/plugins/quest.js';

const EE = Phaser.Events.EventEmitter;
const GetValue = Phaser.Utils.Objects.GetValue;

class DialogQuest extends EE {
    consturcto(scene, config) {
        super();

        if (config === undefined) {
            config = {};
        }
        if (!config.quest) {
            config.quest = true;
        }

        this.scene = scene;
        this.createDialogCallback = GetValue(config, 'createDialogCallback', undefined);
        this.createDialogCallbackScope = GetValue(config, 'createDialogCallbackScope', undefined);
        this.questionManager = new QuestionManager(config);
        this.questionManager
            .on('quest', function (question, questionManager, quest) {
                var dialog;
                if (this.createDialogCallback) {
                    if (this.createDialogCallbackScope) {
                        dialog = this.createDialogCallback.call(this.createDialogCallbackScope, scene, question, questionManager);
                    } else {
                        dialog = this.createDialogCallback(scene, question, questionManager);
                    }
                }
                if (dialog) {
                    dialog.layout();
                } else {
                    questionManager.emit('complete', questionManager, quest); // User defined event
                }
            }, this)
    }

    startQuest() {
        this.questionManager
            .restartQuest()
            .getNextQuestion();
        return this;
    }
}

export default DialogQuest;