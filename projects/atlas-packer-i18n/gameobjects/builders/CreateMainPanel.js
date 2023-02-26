import MainPanel from '../mainpanel/MainPanel.js';

var CreateMainPanel = function (scene, configObj, model) {
    var mainPanel = new MainPanel(scene, configObj, model);
    scene.add.existing(mainPanel);
    return mainPanel;
}

export default CreateMainPanel;