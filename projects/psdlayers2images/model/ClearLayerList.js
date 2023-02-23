const CanvasPool = Phaser.Display.Canvas.CanvasPool;

var ClearLayerList = function () {
    var layers = this.layerList.list;
    for (var i = 0, cnt = layers.length; i < cnt; i++) {
        var layer = layers[i];
        CanvasPool.remove(layer.canvas);
        layer.canvas = null;
    }

    this.layerList.removeAll();
    return this;
}

export default ClearLayerList;