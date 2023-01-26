import ContentPanel from '../contentpanel/ContentPanel.js';

var CreateContentPanel = function (scene, config) {
    var contentConfig = config.content || {};
    contentConfig.model = config.model;
    var contentPanel = new ContentPanel(scene, contentConfig);
    scene.add.existing(contentPanel);

    return contentPanel;
}

export default CreateContentPanel;