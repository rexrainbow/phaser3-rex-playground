import Potpack from '../../lib/potpack.js';
import AlignIn from '../../../../../phaser3-rex-notes/plugins/utils/actions/AlignIn.js';

var Layout = function (factor) {
    var children = this.getChildren();

    // Rectangle packing
    var boxes = [];
    for (var i = 0, cnt = children.length; i < cnt; i++) {
        var child = children[i];
        boxes.push({ w: child.width, h: child.height });
    }
    var result = Potpack(boxes, factor);
    this.setSize(result.w, result.h);

    // Layout children
    var scaleXSave = this.scaleX,
        scaleYSave = this.scaleY;
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

    this.setScale(scaleXSave, scaleYSave);

    return this;
}

export default Layout;