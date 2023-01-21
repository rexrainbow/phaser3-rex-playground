import { Canvas } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';

var CreateImageFromFile = function (scene, file, onComplete) {
    var canvas = new Canvas(scene);
    scene.add.existing(canvas);

    canvas.loadFromFile(file, onComplete);

    return canvas;
}
export default CreateImageFromFile;