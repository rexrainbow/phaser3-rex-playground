import LeftSidePanel from '../leftsidepanel/LeftSidePanel.js';

var CreateLeftSidePanel = function (scene, configObj, model) {
    var leftSidePanel = new LeftSidePanel(scene, configObj, model);
    scene.add.existing(leftSidePanel);

    return leftSidePanel;
}

export default CreateLeftSidePanel;