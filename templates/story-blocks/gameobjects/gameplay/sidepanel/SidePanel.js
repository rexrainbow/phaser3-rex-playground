import Sizer from '../../../../../../phaser3-rex-notes/templates/ui/sizer/Sizer.js';
import ScoreLabel from './ScoreLabel.js';
import TopToolbar from './TopToolbar.js';
import BottomToolbar from './BottomToolbar.js';

class SidePanel extends Sizer {
    constructor(scene) {
        // Fixed width, expand height
        super(scene, {
            orientation: 'y',
            width: 450
        })

        // var background = scene.add.rectangle(0, 0, 1, 1).setStrokeStyle(2, 0xffffff);
        // this.addBackground(background);

        var scoreLabel = new ScoreLabel(scene);
        scene.add.existing(scoreLabel);


        var topToolbar = new TopToolbar(scene);
        scene.add.existing(topToolbar);

        var bottomToolbar = new BottomToolbar(scene);
        scene.add.existing(bottomToolbar);

        this
            .add(topToolbar, { align: 'right', })
            .addSpace(2)
            .add(scoreLabel, { align: 'center' })
            .addSpace(3)
            .add(bottomToolbar, { align: 'right' })
    }
}

export default SidePanel;