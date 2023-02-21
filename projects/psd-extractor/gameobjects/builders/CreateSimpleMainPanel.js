import SimpleMainPanel from '../simplemainpanel/SimpleMainPanel.js';

var CreateSimpleMainPanel = function (scene, configObj, model) {
    var simpleMainPanel = new SimpleMainPanel(scene, configObj, model);
    scene.add.existing(simpleMainPanel);
    return simpleMainPanel;
}

export default CreateSimpleMainPanel;