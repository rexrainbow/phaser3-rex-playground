import Potpack from '../../lib/potpack.js';
import AlignIn from '../../../../../phaser3-rex-notes/plugins/utils/actions/AlignIn.js';
import LayoutBackground from './LayoutBackground.js';

var Layout = function () {
    var images = this.images.list;

    if (images.length === 0) {
        this.setScale(1).setSize(1, 1);
        // Layout background
        LayoutBackground.call(this, 0, 0, 0, 0);
        return;
    }

    // Rectangle packing
    var padding = this.imagePadding;
    var boxes = [];
    for (var i = 0, cnt = images.length; i < cnt; i++) {
        var child = images[i];
        boxes.push({
            w: child.width + padding,
            h: child.height + padding,
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
        var child = images[i];

        AlignIn(
            child,
            (startX + box.x), (startY + box.y),
            child.width, child.height,
            0
        );

        this.resetChildPositionState(child);
    }

    // Layout background
    LayoutBackground.call(this, startX, startY, width, height);

    // Restore scale and rotation
    this.setScale(scaleXSave, scaleYSave);

    return this;
}

export default Layout;