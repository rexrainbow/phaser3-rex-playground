var DrawImagesBounds = function (graphics) {   
    this.drawBounds(graphics, {
        children: this.images.list
    })

    return this;
}
export default DrawImagesBounds;