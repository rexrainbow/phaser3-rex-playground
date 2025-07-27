import GetLevelCount from './GetLevelCount.js';

var HasLevel = function (scene, level) {
    return GetLevelCount(scene) > level;
}

export default HasLevel;