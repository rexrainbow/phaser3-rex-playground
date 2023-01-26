var DrawImagesBounds = function () {
    this.graphics.clear();

    this.drawBounds(this.graphics, {
        children: this.images.list
    })

    var layer = this.getLayer();
    layer.bringToTop(this.graphics);

    return this;
}
export default DrawImagesBounds;