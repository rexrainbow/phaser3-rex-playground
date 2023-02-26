import HeaderPanel from '../headerpanel/HeaderPanel.js';

var CreateHeaderPanel = function (scene, configObj, model) {   
    var headerPanel = new HeaderPanel(scene, configObj, model);
    scene.add.existing(headerPanel);

    return headerPanel;
}

export default CreateHeaderPanel;