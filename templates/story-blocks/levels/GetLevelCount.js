import { DATA_KEY_LEVELS } from '../scenes/DataKeys.js';

var GetLevelCount = function (scene) {
    return scene.registry.get(DATA_KEY_LEVELS).length;
}

export default GetLevelCount;