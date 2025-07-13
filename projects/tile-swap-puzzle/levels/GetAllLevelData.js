import { DATA_KEY_LEVELS } from '../scenes/DataKeys.js';

var GetAllLevelData = function (scene) {
    return scene.registry.get(DATA_KEY_LEVELS);
}

export default GetAllLevelData;