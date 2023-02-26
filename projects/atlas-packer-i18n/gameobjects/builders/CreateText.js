import { BBCodeText } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';

var CreateText = function (scene, style) {
    var textGameObject = new BBCodeText(scene, 0, 0, '', style);
    scene.add.existing(textGameObject);
    return textGameObject;
}

export default CreateText;