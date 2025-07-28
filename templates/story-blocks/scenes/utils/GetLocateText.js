import { DATA_KEY_CONFIGURATION } from '../DataKeys.js';

const GetValue = Phaser.Utils.Objects.GetValue;

var GetLocateText = function (scene, keyPath, label, locate) {
    var configuration = scene.registry.get(DATA_KEY_CONFIGURATION);

    var item = GetValue(configuration, keyPath);
    if (item === undefined) {
        item = {};
    }

    var labelText;
    var fallback = (locate === undefined) || (!item.hasOwnProperty(`${label}-${locate}`));
    if (fallback) {
        labelText = item[label];
    } else {
        labelText = item[`${label}-${locate}`];
    }
    return labelText;
}

export default GetLocateText;