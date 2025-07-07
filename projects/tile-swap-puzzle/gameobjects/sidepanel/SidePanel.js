import Sizer from '../../../../../phaser3-rex-notes/templates/ui/sizer/Sizer.js';
import ScoreLabel from './ScoreLabel.js';
import Toolbar from './Toolbar.js';

class SidePanel extends Sizer {
    constructor(scene) {
        super(scene, {
            orientation: 'y',
            width: 600
        })

        var background = scene.add.rectangle(0, 0, 1, 1).setStrokeStyle(2, 0xffffff);
        this.addBackground(background);

        var scoreLabel = new ScoreLabel(scene);
        scene.add.existing(scoreLabel);

        var toolbar = new Toolbar(scene);
        scene.add.existing(toolbar);

        this
            .addSpace(2)
            .add(scoreLabel, { align: 'center' })
            .addSpace(3)
            .add(toolbar, { align: 'right' })
    }
}

export default SidePanel;