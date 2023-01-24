import Model from '../model/Model.js';
import CreateTopPanel from '../gameobjects/builders/CreateTopPanel.js';

var CreateApp = function (scene, config) {
    var model = new Model();
    config.model = model;
    var view = CreateTopPanel(scene, config);
    return view;
}

export default CreateApp;