import ContentPanel from '../contentpanel/ContentPanel.js';

var CreateContentPanel = function (scene, config, model) {
    var contentPanel = new ContentPanel(scene, config, model);
    scene.add.existing(contentPanel);

    return contentPanel;
}

export default CreateContentPanel;