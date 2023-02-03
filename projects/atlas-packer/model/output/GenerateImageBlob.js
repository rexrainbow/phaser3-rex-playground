import { Canvas } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';

var GenerateImageBlob = function (scene, imageDataArray) {
    var totalWidth = 0, totalHeight = 0;
    for (var i = 0, cnt = imageDataArray.length; i < cnt; i++) {
        var imageData = imageDataArray[i];
        totalWidth = Math.max(totalWidth, imageData.x + imageData.width);
        totalHeight = Math.max(totalHeight, imageData.y + imageData.height);
    }

    var canvas = new Canvas(scene, 0, 0, totalWidth, totalHeight);
    for (var i = 0, cnt = imageDataArray.length; i < cnt; i++) {
        var imageData = imageDataArray[i];
        canvas.drawFrame(
            imageData.key, null,
            imageData.x, imageData.y,
            imageData.width, imageData.height
        );
    }

    return new Promise(function (resolve, reject) {
        canvas.getCanvas().toBlob(function (blob) {
            canvas.destroy();
            resolve(blob);
        });
    });
}

export default GenerateImageBlob;