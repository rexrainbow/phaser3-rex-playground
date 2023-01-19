import Potpack from '../../lib/potpack.js';
import AlignIn from '../../../../../phaser3-rex-notes/plugins/utils/actions/AlignIn.js';
import FitToSize from '../../../../../phaser3-rex-notes/plugins/utils/size/FitTo.js';

var Layout = function (outerWidth, outerHeight) {
    var children = this.getChildren();

    if (children.length === 0) {
        this.setSize(outerWidth, outerHeight).setScale(1);
        return;
    }

    // Rectangle packing
    var boxes = [];
    for (var i = 0, cnt = children.length; i < cnt; i++) {
        var child = children[i];
        boxes.push({ w: child.width, h: child.height });
    }
    var result = Potpack(boxes);
    this.setSize(result.w, result.h);

    // Layout children
    this.setScale(1, 1);

    var startX = this.left,
        startY = this.top;
    for (var i = 0, cnt = boxes.length; i < cnt; i++) {
        var box = boxes[i];
        var child = children[i];

        AlignIn(
            child,
            startX + box.x,
            startY + box.y,
            box.w,
            box.h,
            0
        );

        this.resetChildPositionState(child);
    }

    // Fit to outer size, keep ratio
    var result = FitToSize(this, {
        width: outerWidth,
        height: outerHeight
    }, true);
    this.setDisplaySize(result.width, result.height);

    return this;
}

export default Layout;