import Potpack from '../../lib/potpack.js';
import AlignIn from '../../../../../phaser3-rex-notes/plugins/utils/actions/AlignIn.js';
import LayoutBackground from './LayoutBackground.js';

var Layout = function () {
    var images = this.images.list;

    if (images.length === 0) {
        this.setScale(1).setSize(1, 1);
        // Layout background
        LayoutBackground.call(this, 0, 0, 0, 0);
        return this;
    }

    // Rectangle packing
    var padding = this.imagePadding;
    var totalPadding = padding * 2;
    var boxes = [];
    for (var i = 0, cnt = images.length; i < cnt; i++) {
        var image = images[i];
        boxes.push({
            w: image.width + totalPadding,
            h: image.height + totalPadding,
            image: image
        });
    }
    var result = Potpack(boxes);
    this.setSize(result.w, result.h);

    // Layout images

    // Save scale and rotation
    var scaleXSave = this.scaleX,
        scaleYSave = this.scaleY;
    this.setScale(1, 1);

    var width = this.width;
    var height = this.height;
    var startX = this.x - (width * this.originX);
    var startY = this.y - (height * this.originY);

    // Layout images
    for (var i = 0, cnt = boxes.length; i < cnt; i++) {
        var box = boxes[i];
        var image = box.image;

        AlignIn(
            image,
            (startX + box.x + padding),
            (startY + box.y + padding),
            image.width,
            image.height,
            0
        );

        image.imageData = {
            x: box.x, y: box.y,
            width: image.width, height: image.height
        }

        this.resetChildPositionState(image);
    }

    // Layout background
    LayoutBackground.call(this, startX, startY, width, height);

    // Restore scale and rotation
    this.setScale(scaleXSave, scaleYSave);

    return this;
}

export default Layout;