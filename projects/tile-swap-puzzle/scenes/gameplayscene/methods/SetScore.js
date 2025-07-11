import { DATA_KEY_SCORE } from '../../const.js';

var SetScore = function (score) {
    this.data.set(DATA_KEY_SCORE, score);
}

export default SetScore;