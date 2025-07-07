import Label from '../../../../../phaser3-rex-notes/templates/ui/label/Label.js';
import AddEvent from '../../../../../phaser3-rex-notes/plugins/utils/gameobject/addevent/AddEvent.js';
import { DATA_KEY_SCORE } from '../../scenes/const.js';

class ScoreLabel extends Label {
    constructor(scene) {
        var background = scene.add.rectangle(0, 0, 1, 1).setStrokeStyle(2, 0xffffff);
        var txt = scene.add.bitmapText(0, 0, 'gothic', ' ', 100).setOrigin(0.5);

        super(scene, {
            width: 400,

            background: background,
            text: txt,
            align: 'center'
        })

        AddEvent(this, scene.data.events, `changedata-${DATA_KEY_SCORE}`, function (parent, value, previousValue) {
            var newText = `${value}\%`;
            if (txt.text === newText) {
                return;
            }
            txt.setText(newText);
        })
    }
}


export default ScoreLabel;