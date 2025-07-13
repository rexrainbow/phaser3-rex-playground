import Button from '../../../../../../../phaser3-rex-notes/plugins/button.js';
import CreateStoryDialog from '../../../storyblock/CreateStoryDialog.js';
import { DATA_KEY_LEVEL } from '../../../../scenes/DataKeys.js';
import { EVT_START_GAME, EVT_COMPLETE_GAME } from '../../../../scenes/gameplayscene/const.js';
import AddSceneEvent from '../../../../../../../phaser3-rex-notes/plugins/utils/gameobject/addevent/AddSceneEvent.js';

var CreateStoryIcon = function (scene, size) {
    var storyIcon = scene.add.image(0, 0, 'icons', 'story').setDisplaySize(size, size);
    storyIcon.button = new Button(storyIcon)
        .on('click', function () {
            var level = scene.data.get(DATA_KEY_LEVEL);
            CreateStoryDialog(scene, level.story, level.image);

        })

    AddSceneEvent(storyIcon, EVT_START_GAME, function () {
        storyIcon.setTint(0x888888);
        storyIcon.button.setEnable(false);
    }, this);

    AddSceneEvent(storyIcon, EVT_COMPLETE_GAME, function () {
        storyIcon.setTint(0xFFFFFF);
        storyIcon.button.setEnable(true);
    }, this);

    return storyIcon;
}

export default CreateStoryIcon;