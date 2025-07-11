import GetAllLevelData from './GetAllLevelData.js';

var GetLevelData = function (scene, level) {
    if (level === undefined) {
        level = 0;
    }
    var data = GetAllLevelData(scene)[level];
    return data;
}

export default GetLevelData;