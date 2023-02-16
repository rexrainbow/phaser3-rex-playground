var OnUpdateImages = function () {
    var tweens = this.scene.tweens;
    var images = this.images.list;
    for (var i = 0, cnt = images.length; i < cnt; i++) {
        let image = images[i];
        if (image.prevX === undefined) {
            image.prevX = 0;
            image.prevY = 0;
        }

        var curX = image.x,
            curY = image.y;
        image.setPosition(image.prevX, image.prevY);
        tweens.add({
            targets: image,
            x: curX,
            y: curY,
            duration: 200,
        })
            .on('update', function () {
                this.resetChildPositionState(image);
            }, this)

        image.prevX = curX;
        image.prevY = curY;
    }
}

export default OnUpdateImages;