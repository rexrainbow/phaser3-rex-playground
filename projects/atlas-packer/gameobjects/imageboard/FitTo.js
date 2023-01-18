import FitToSize from '../../../../../phaser3-rex-notes/plugins/utils/size/FitTo.js';

var FitTo = function (target) {
    var result = FitToSize(this, target, true);
    this.setDisplaySize(result.width, result.height);
    return this;
}

export default FitTo;