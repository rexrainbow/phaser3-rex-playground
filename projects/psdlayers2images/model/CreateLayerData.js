const CanvasPool = Phaser.Display.Canvas.CanvasPool;

var CreateLayerData = function (node) {
    var layerData = {
        name: node.name,
        key: node.name,

        width: node.width,
        height: node.height,
        left: node.left,
        right: node.right,
        top: node.top,
        bottom: node.bottom,

        // Run `CanvasPool.remove(canvas)` to free this canvas object
        canvas: GetImageCanvas(node.layer.image.pixelData, node.width, node.height),
    }

    return layerData;
}

var GetImageCanvas = function (pixelData, width, height) {
    var canvas = CanvasPool.create(null, width, height, undefined, true);
    var context = canvas.getContext('2d');
    var imageData = context.getImageData(0, 0, width, height);
    var canvasPixelData = imageData.data;
    for (var i = 0, cnt = pixelData.length; i < cnt; i++) {
        canvasPixelData[i] = pixelData[i];
    }
    context.putImageData(imageData, 0, 0);
    return canvas;
}

export default CreateLayerData;