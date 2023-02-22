const UUID = Phaser.Utils.String.UUID;

var CreateLayerData = function (node) {
    // this: model
    var layerData = {
        name: node.name,
        baseName: node.name,
        key: UUID(),

        width: node.width,
        height: node.height,
        left: node.left,
        right: node.right,
        top: node.top,
        bottom: node.bottom,
    }

    AddImageToTextureCache.call(
        this,
        layerData.key,
        node.layer.image.pixelData,
        node.width, node.height
    );

    return layerData;
}

var AddImageToTextureCache = function (key, pixelData, width, height) {
    // this: model
    var texture = this.scene.textures.createCanvas(key, width, height);

    var context = texture.getContext();
    var imageData = context.getImageData(0, 0, width, height);
    var canvasPixelData = imageData.data;
    for (var i = 0, cnt = pixelData.length; i < cnt; i++) {
        canvasPixelData[i] = pixelData[i];
    }
    context.putImageData(imageData, 0, 0);

    texture.refresh();
}

export default CreateLayerData;