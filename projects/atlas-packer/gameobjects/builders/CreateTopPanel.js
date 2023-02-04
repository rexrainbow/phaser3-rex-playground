import TopPanel from '../toppanel/TopPanel.js';

var CreateTopPanel = function (scene, configObj, model) {
    var topPanel = new TopPanel(scene, configObj, model)
    scene.add.existing(topPanel);

    return topPanel;
}

export default CreateTopPanel;