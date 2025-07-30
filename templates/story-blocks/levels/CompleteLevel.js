import { DATA_KEY_LEVELS } from '../scenes/DataKeys.js';
import HasLevel from './HasLevel.js';

var CompleteLevel = function (scene, level) {
    if (!HasLevel(scene, level)) {
        return;
    }

    scene.registry.get(DATA_KEY_LEVELS)[level].$completed = true;

    var game = scene.sys.game;
    var completedLevels = game.localStorageData.completedLevels;
    completedLevels.set(level.toString(), true);
}

export default CompleteLevel;