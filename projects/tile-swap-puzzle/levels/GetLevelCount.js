import GetAllLevelData from './GetAllLevelData.js';

var GetLevelCount = function (scene) {
    return GetAllLevelData(scene).length;
}

export default GetLevelCount;