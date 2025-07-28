import { DATA_KEY_CONFIGURATION } from '../DataKeys.js';

var GetWindowSize = function (scene) {
    var configuration = scene.registry.get(DATA_KEY_CONFIGURATION);
    return configuration.WindowSize;
}

export default GetWindowSize;