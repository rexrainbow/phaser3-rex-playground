import FitToSize from '../../../../../phaser3-rex-notes/plugins/utils/size/FitTo.js';

var FitTo = function (width, height) {
    var result = FitToSize(this, { width: width, height: height }, true);
    this.setDisplaySize(result.width, result.height);
    return this;
}

export default FitTo;