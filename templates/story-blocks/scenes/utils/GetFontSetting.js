import { DATA_KEY_CONFIGURATION } from '../DataKeys.js';

var GetFontSetting = function (scene) {
    var configuration = scene.registry.get(DATA_KEY_CONFIGURATION);
    return configuration.Font;
}

export default GetFontSetting;