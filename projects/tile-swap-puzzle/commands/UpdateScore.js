import { DATA_KEY_SCORE } from '../scenes/const.js';

var UpdateScore = function (scene) {
    scene.setScore = function (score) {
        scene.data.set(DATA_KEY_SCORE, score);
    }
}

export default UpdateScore;