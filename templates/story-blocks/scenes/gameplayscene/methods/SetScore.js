import { DATA_KEY_SCORE, DATA_KEY_LEVEL } from '../../DataKeys.js';
import { EVT_COMPLETE_GAME } from '../EventName.js';
import CompleteLevel from '../../../levels/CompleteLevel.js';

var SetScore = function (score) {
    var isCompleted = (this.data.get(DATA_KEY_SCORE) === 100);
    this.data.set(DATA_KEY_SCORE, score);

    if (!isCompleted && (score === 100)) {
        // The level has been completed.
        var levelData = this.data.get(DATA_KEY_LEVEL);
        CompleteLevel(this, levelData.level);
        this.events.emit(EVT_COMPLETE_GAME);
    }
}

export default SetScore;