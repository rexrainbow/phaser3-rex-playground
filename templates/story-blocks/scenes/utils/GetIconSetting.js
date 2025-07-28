import { DATA_KEY_CONFIGURATION } from '../DataKeys.js';

var GetIconSetting = function (scene) {
    var configuration = scene.registry.get(DATA_KEY_CONFIGURATION);
    return configuration.Icons;
}

export default GetIconSetting;