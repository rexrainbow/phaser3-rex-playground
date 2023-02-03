import TopPanel from '../toppanel/TopPanel.js';

var CreateTopPanel = function (scene, config, model) {       
    var topPanel = new TopPanel(scene, config, model)
    scene.add.existing(topPanel);

    return topPanel;
}

export default CreateTopPanel;