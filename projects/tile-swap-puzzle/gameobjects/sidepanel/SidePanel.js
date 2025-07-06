import Sizer from '../../../../../phaser3-rex-notes/templates/ui/sizer/Sizer.js';
import Toolbar from './Toolbar.js';

class SidePanel extends Sizer {
    constructor(scene) {
        super(scene, {
            orientation: 'y',
            width: 600
        })

        var background = scene.add.rectangle(0, 0, 1, 1).setStrokeStyle(2, 0xffffff);
        this.addBackground(background);

        var scoreText = scene.add.bitmapText(0, 0, 'gothic', ' ').setOrigin(0.5);

        var checkIcon = scene.add.image(0, 0, 'check').setDisplaySize(120, 120).setAlpha(0);

        var toolbar = new Toolbar(scene);
        scene.add.existing(toolbar);

        this
            .addSpace(2)
            .add(scoreText, { align: 'center' })
            .add(checkIcon, { align: 'center', padding: { top: 10 } })
            .addSpace(3)
            .add(toolbar, { align: 'right' })

        scene.data.events.on('changedata-score', function (parent, value, previousValue) {
            var newText = `${value}\%`;
            if (scoreText.text === newText) {
                return;
            }
            scoreText.setText(newText);

            if (value === 100) {
                checkIcon.setAlpha(1);
            } else {
                checkIcon.setAlpha(0);
            }
        });
    }
}

export default SidePanel;