import { ImageBox } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';

var CreateImageIcon = function (scene, config, model) {
    var imageIcon = new ImageBox(scene, config);
    scene.add.existing(imageIcon);

    return imageIcon;
}

export default CreateImageIcon;