import ContentPanel from '../contentpanel/ContentPanel.js';

var CreateContentPanel = function (scene, configObj, model) {
    var contentPanel = new ContentPanel(scene, configObj, model);
    scene.add.existing(contentPanel);

    return contentPanel;
}

export default CreateContentPanel;