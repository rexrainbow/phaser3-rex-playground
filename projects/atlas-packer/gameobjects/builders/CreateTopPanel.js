import TopPanel from '../toppanel/TopPanel.js';

var CreateTopPanel = function (scene, config) {       
    var topPanel = new TopPanel(scene, config)
    scene.add.existing(topPanel);

    return topPanel;
}

export default CreateTopPanel;