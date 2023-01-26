var DrawImagesBounds = function () {
    this.graphics.clear();

    this.drawBounds(this.graphics, {
        children: this.images.list
    })

    return this;
}
export default DrawImagesBounds;