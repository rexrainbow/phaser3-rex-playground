var ClearLayerList = function () {
    var layers = this.layerList.list;
    var textures = this.scene.textures;
    for (var i = 0, cnt = layers.length; i < cnt; i++) {
        textures.remove(layers[i].key);
    }

    this.layerList.removeAll();
    return this;
}

export default ClearLayerList;