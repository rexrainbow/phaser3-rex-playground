import DeepClone from '../../../../../phaser3-rex-notes/plugins/utils/object/DeepClone.js';

var DrawImageMarker = function (graphics, name, style) {
    var gameObject = this.getImage(name);
    if (!gameObject) {
        return this;
    }

    var config = (style) ? DeepClone(style) : {};
    config.children = gameObject;
    this.drawBounds(graphics, config)
    return this;
}
export default DrawImageMarker;