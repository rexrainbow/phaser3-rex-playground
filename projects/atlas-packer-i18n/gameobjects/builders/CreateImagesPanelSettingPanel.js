import ImagesPanelSettingPanel from '../imagespanelsettingpanel/ImagesPanelSettingPanel.js';

var CreateImagesPanelSettingPanel = function (scene, configObj, model) {
    var settingPanel = new ImagesPanelSettingPanel(scene, configObj, model);
    scene.add.existing(settingPanel);
    return settingPanel;
}
export default CreateImagesPanelSettingPanel;