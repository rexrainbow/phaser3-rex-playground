import LeftSidePanel from '../leftsidepanel/LeftSidePanel.js';

var CreateLeftSidePanel = function (scene, config) {
    var leftSideConfig = config.leftSide || {};
    leftSideConfig.commandHub = config.commandHub;
    var leftSidePanel = new LeftSidePanel(scene, leftSideConfig);
    scene.add.existing(leftSidePanel);

    return leftSidePanel;
}

export default CreateLeftSidePanel;