import DeepClone from '../../../../../phaser3-rex-notes/plugins/utils/object/DeepClone.js';

var DrawImagesBounds = function (graphics, style) {
    var config = (style) ? DeepClone(style) : {};
    config.children = this.images.list;
    this.drawBounds(graphics, config);

    return this;
}
export default DrawImagesBounds;