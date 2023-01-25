import Model from '../model/Model.js';
import CreateTopPanel from '../gameobjects/builders/CreateTopPanel.js';

var CreateApp = function (scene, config) {
    if (config === undefined) {
        config = {};
    }
    config.model = new Model();
    var view = CreateTopPanel(scene, config);
    return view;
}

export default CreateApp;