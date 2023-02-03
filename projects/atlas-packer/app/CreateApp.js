import Model from '../model/Model.js';
import CreateTopPanel from '../gameobjects/builders/CreateTopPanel.js';

var CreateApp = function (scene, config) {
    if (config === undefined) {
        config = {};
    }
    var model = new Model();
    var view = CreateTopPanel(scene, config, model);
    return view;
}

export default CreateApp;