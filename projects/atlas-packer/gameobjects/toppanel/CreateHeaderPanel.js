import HeaderPanel from '../headerpanel/HeaderPanel.js';

var CreateHeaderPanel = function (scene, config, model) {   
    var headerPanel = new HeaderPanel(scene, config.header, model);
    scene.add.existing(headerPanel);

    return headerPanel;
}

export default CreateHeaderPanel;