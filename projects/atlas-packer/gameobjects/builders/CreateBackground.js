import { RoundRectangle } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';

var CreateBackground = function (scene, config, model) {
    if (typeof (config) === 'number') {
        config = {
            color: config
        }
    }
    var roundRectangle = new RoundRectangle(scene, config);
    scene.add.existing(roundRectangle);
    return roundRectangle;
}

export default CreateBackground;