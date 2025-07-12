import Label from '../../../../../../phaser3-rex-notes/templates/ui/label/Label.js';
import BBCodeText from '../../../../../../phaser3-rex-notes/plugins/bbcodetext.js';
import AddEvent from '../../../../../../phaser3-rex-notes/plugins/utils/gameobject/addevent/AddEvent.js';
import { DATA_KEY_SCORE } from '../../../scenes/const.js';
import { CANVAS_FONT,CANVAS_TEST_STRING } from '../../../scenes/const.js';

class ScoreLabel extends Label {
    constructor(scene) {
        var background = scene.add.rectangle(0, 0, 1, 1).setStrokeStyle(2, 0xffffff);
        var txt = new BBCodeText(scene, 0, 0, ' ', {
            fontFamily: CANVAS_FONT,
            fontSize: `100px`,
            testString: CANVAS_TEST_STRING,
        }).setOrigin(0.5, 0.5)
        scene.add.existing(txt);

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