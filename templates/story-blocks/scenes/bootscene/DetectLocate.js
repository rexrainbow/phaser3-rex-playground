import DetectUserLocale from '../../../../../phaser3-rex-notes/plugins/utils/locate/DetectUserLocale.js';

var DetectLocate = function () {
    var locate = DetectUserLocale();
    if (locate.startsWith('zh')) {
        return 'zh';
    }

    return 'en';
}

export default DetectLocate;