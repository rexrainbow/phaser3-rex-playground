import StatusPanel from '../statuspanel/StatusPanel.js';
import HasValue from '../../../../../phaser3-rex-notes/plugins/utils/object/HasValue.js';
import SetValue from '../../../../../phaser3-rex-notes/plugins/utils/object/SetValue.js'

var CreateStatusPanel = function (scene, configObj, model) {
    var config = configObj.cloneValue('.');

    SetValue(config, 'text.halign', 'right');

    if (!HasValue(config, 'text.fixedWidth')) {
        SetValue(config, 'text.fixedWidth', 350);
    }

    var statusPanel = new StatusPanel(scene, config);
    scene.add.existing(statusPanel);

    return statusPanel;
}

export default CreateStatusPanel;