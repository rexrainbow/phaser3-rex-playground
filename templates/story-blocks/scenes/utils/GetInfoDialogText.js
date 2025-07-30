import { DATA_KEY_CONFIGURATION } from '../DataKeys.js';
import GetLocateText from '../../utils/GetLocateText.js'

var GetInfoDialogText = function (scene, label, locate) {
    var configuration = scene.registry.get(DATA_KEY_CONFIGURATION);
    return GetLocateText(configuration.InfoDialog, label, locate);
}

export default GetInfoDialogText;