import { RoundRectangle } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';

var CreateBackground = function (scene, color) {
    var roundRectangle = new RoundRectangle(scene, {
        color: color
    })
    scene.add.existing(roundRectangle);
    return roundRectangle;
}

export default CreateBackground;