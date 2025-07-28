import Label from '../../../../../../phaser3-rex-notes/templates/ui/label/Label.js';
import BBCodeText from '../../../../../../phaser3-rex-notes/plugins/bbcodetext.js';
import AddEvent from '../../../../../../phaser3-rex-notes/plugins/utils/gameobject/addevent/AddEvent.js';
import { DATA_KEY_SCORE } from '../../../scenes/DataKeys.js';
import GetFontSetting from '../../../scenes/utils/GetFontSetting.js';

class ScoreLabel extends Label {
    constructor(scene) {
        var fontSetting = GetFontSetting(scene);

        //var background = scene.add.rectangle(0, 0, 1, 1).setStrokeStyle(2, 0xffffff);
        var txt = new BBCodeText(scene, 0, 0, ' ', {
            fontFamily: fontSetting.family,
            fontSize: `100px`,
            testString: fontSetting.testString,
        }).setOrigin(0.5, 0.5)
        scene.add.existing(txt);

        super(scene, {
            width: 400,

            //background: background,
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