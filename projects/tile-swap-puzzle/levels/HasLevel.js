import GetLevelCount from './GetLevelCount.js';

var HasLevel = function (scene, level) {
    console.log(GetLevelCount(scene))
    return GetLevelCount(scene) > level;
}

export default HasLevel;