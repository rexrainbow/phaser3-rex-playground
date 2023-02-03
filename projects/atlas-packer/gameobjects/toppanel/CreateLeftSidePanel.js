import LeftSidePanel from '../leftsidepanel/LeftSidePanel.js';

var CreateLeftSidePanel = function (scene, config, model) {
    var leftSidePanel = new LeftSidePanel(scene, config.leftSide, model);
    scene.add.existing(leftSidePanel);

    return leftSidePanel;
}

export default CreateLeftSidePanel;