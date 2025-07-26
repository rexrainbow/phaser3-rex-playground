import CreateIconButton from '../../../iconbutton/CreateIconButton.js';
import { EVT_START_GAME, EVT_COMPLETE_GAME } from '../../../../scenes/gameplayscene/const.js';
import AddSceneEvent from '../../../../../../../phaser3-rex-notes/plugins/utils/gameobject/addevent/AddSceneEvent.js';
import { DATA_KEY_LEVEL } from '../../../../scenes/DataKeys.js';
import HasLevel from '../../../../levels/HasLevel.js';
import Play from '../../../../scenes/gameplayscene/Play.js';

var CreateNextLevelIcon = function (scene, size) {
    var iconButton = CreateIconButton(scene, 'icons', 'next', size);
    iconButton.button
        .on('click', function () {
            var levelData = scene.data.get(DATA_KEY_LEVEL);
            Play(scene, levelData.level + 1);
        })
        .on('enable', function () {
            iconButton.getElement('icon').setTint(0xFFFFFF);
        })
        .on('disable', function () {
            iconButton.getElement('icon').setTint(0x888888);
        })

    AddSceneEvent(iconButton, EVT_START_GAME, function () {
        var levelData = scene.data.get(DATA_KEY_LEVEL);
        var hasNextLevel = HasLevel(scene, levelData.level + 1);
        iconButton.button.setEnable(levelData.completed && hasNextLevel);
    }, this);

    AddSceneEvent(iconButton, EVT_COMPLETE_GAME, function () {
        var levelData = scene.data.get(DATA_KEY_LEVEL);
        var hasNextLevel = HasLevel(scene, levelData.level + 1);
        iconButton.button.setEnable(hasNextLevel);
    }, this);

    return iconButton;
}

export default CreateNextLevelIcon;