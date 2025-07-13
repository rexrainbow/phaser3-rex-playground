import Button from '../../../../../../../phaser3-rex-notes/plugins/button.js';
import { EVT_START_GAME, EVT_COMPLETE_GAME } from '../../../../scenes/gameplayscene/const.js';
import AddSceneEvent from '../../../../../../../phaser3-rex-notes/plugins/utils/gameobject/addevent/AddSceneEvent.js';
import { DATA_KEY_LEVEL } from '../../../../scenes/DataKeys.js';
import HasLevel from '../../../../levels/HasLevel.js';
import Play from '../../../../scenes/gameplayscene/Play.js';

var CreateNextLevelIcon = function (scene, size) {
    var nextLevelIcon = scene.add.image(0, 0, 'icons', 'next').setDisplaySize(size, size);
    nextLevelIcon.button = new Button(nextLevelIcon)
        .on('click', function () {
            var levelData = scene.data.get(DATA_KEY_LEVEL);
            Play(scene, levelData.level + 1);
        })
        .on('enable', function () {
            nextLevelIcon.setTint(0xFFFFFF);
        })
        .on('disable', function () {
            nextLevelIcon.setTint(0x888888);
        })

    AddSceneEvent(nextLevelIcon, EVT_START_GAME, function () {
        var levelData = scene.data.get(DATA_KEY_LEVEL);
        var hasNextLevel = HasLevel(scene, levelData.level + 1);
        nextLevelIcon.button.setEnable(levelData.completed && hasNextLevel);
    }, this);

    AddSceneEvent(nextLevelIcon, EVT_COMPLETE_GAME, function () {
        var levelData = scene.data.get(DATA_KEY_LEVEL);
        var hasNextLevel = HasLevel(scene, levelData.level + 1);
        nextLevelIcon.button.setEnable(hasNextLevel);
    }, this);

    return nextLevelIcon;
}

export default CreateNextLevelIcon;