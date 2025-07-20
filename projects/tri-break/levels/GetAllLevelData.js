import GetLevelCount from './GetLevelCount.js';
import GetLevelData from './GetLevelData.js';

var GetAllLevelData = function (scene, locate) {
    var levelDataList = []
    for (var i = 0, cnt = GetLevelCount(scene); i < cnt; i++) {
        levelDataList.push(GetLevelData(scene, i, locate));
    }
    return levelDataList;
}

export default GetAllLevelData;