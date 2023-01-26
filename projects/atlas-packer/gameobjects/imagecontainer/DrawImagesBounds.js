var DrawImagesBounds = function (graphics) {
    graphics.clear();

    this.drawBounds(graphics, {
        children: this.images.list
    })

    return this;
}
export default DrawImagesBounds;