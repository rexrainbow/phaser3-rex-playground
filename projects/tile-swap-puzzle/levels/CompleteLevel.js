import { DATA_KEY_LEVELS, DATA_KEY_COMPLETED_LEVELS } from '../scenes/const.js';

var CompleteLevel = function (scene, level) {
    scene.registry.get(DATA_KEY_LEVELS)[level].completed = true;
    scene.registry.get(DATA_KEY_COMPLETED_LEVELS)[level] = true;
}

export default CompleteLevel;