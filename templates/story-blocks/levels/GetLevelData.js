import HasLevel from './HasLevel.js';
import { DATA_KEY_LEVELS } from '../scenes/DataKeys.js';

var GetLevelData = function (scene, level) {
    if (level === undefined) {
        level = 0;
    }
    if (!HasLevel(scene, level)) {
        return null;
    }

    var levelData = scene.registry.get(DATA_KEY_LEVELS)[level];
    return levelData;
}

export default GetLevelData;