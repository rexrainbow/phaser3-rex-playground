import AlignIn from '../../../../../phaser3-rex-notes/plugins/utils/actions/AlignIn.js';

var LayoutBackground = function (x, y, width, height) {
    // Layout background
    var backgrounds = this.backgrounds.list;
    for (var i = 0, cnt = backgrounds.length; i < cnt; i++) {
        var child = backgrounds[i];

        child.resize(width, height);
        AlignIn(child, x, y, width, height, 0);
    }
}

export default LayoutBackground;