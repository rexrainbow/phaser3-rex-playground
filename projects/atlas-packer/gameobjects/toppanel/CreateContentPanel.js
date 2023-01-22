import ContainerPanel from '../containerpanel/ContainerPanel';

var CreateContentPanel = function (scene, config) {
    var contentConfig = config.content || {};
    contentConfig.model = config.model;
    var contentPanel = new ContainerPanel(scene, contentConfig);
    scene.add.existing(contentPanel);

    return contentPanel;
}

export default CreateContentPanel;