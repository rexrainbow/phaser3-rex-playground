import CreateIconButton from '../../../iconbutton/CreateIconButton.js';
import CreateStoryDialog from '../../../storyblock/CreateStoryDialog.js';
import { DATA_KEY_LEVEL } from '../../../../scenes/DataKeys.js';
import { EVT_START_GAME, EVT_COMPLETE_GAME } from '../../../../scenes/gameplayscene/EventName.js';
import AddSceneEvent from '../../../../../../../phaser3-rex-notes/plugins/utils/gameobject/addevent/AddSceneEvent.js';
import GetIconSetting from '../../../../scenes/utils/GetIconSetting.js';

var CreateStoryIcon = function (scene, size) {

    var StoryIcon = GetIconSetting(scene).Story;

    var iconButton = CreateIconButton(scene, StoryIcon.key, StoryIcon.frame, size);
    iconButton.button
        .on('click', async function () {
            var levelData = scene.data.get(DATA_KEY_LEVEL);
            scene.pauseGame();
            await CreateStoryDialog(scene, levelData.$story, levelData.image);
            scene.resumeGame();
        })
        .on('enable', function () {
            iconButton.getElement('icon').setTint(0xFFFFFF);
        })
        .on('disable', function () {
            iconButton.getElement('icon').setTint(0x888888);
        })

    AddSceneEvent(iconButton, EVT_START_GAME, function () {
        var levelData = scene.data.get(DATA_KEY_LEVEL);
        iconButton.button.setEnable(levelData.$completed);
    }, this);

    AddSceneEvent(iconButton, EVT_COMPLETE_GAME, function () {
        iconButton.button.setEnable(true);
    }, this);

    return iconButton;
}

export default CreateStoryIcon;