import Tree from '../../../../phaser3-rex-notes/plugins/utils/struct/Tree.js';
import Model from '../model/Model.js';
import CreateTopPanel from '../gameobjects/builders/CreateTopPanel.js';

var CreateApp = function (scene, config) {
    if (config === undefined) {
        config = {};
    }
    var configObj = new Tree(config);
    var model = new Model(scene);
    var view = CreateTopPanel(scene, configObj, model);
    return view;
}

export default CreateApp;