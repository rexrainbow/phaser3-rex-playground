import { Canvas } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';

var CreateImageFromFile = function (scene, file, onComplete) {
    var canvas = new Canvas(scene);
    scene.add.existing(canvas);

    var fileName = file.name;
    var name = fileName.substring(fileName.lastIndexOf('.'))

    canvas
        .setName(name)
        .loadFromFile(file, onComplete);

    return canvas;
}
export default CreateImageFromFile;