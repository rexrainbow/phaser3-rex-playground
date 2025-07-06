import Sizer from '../../../../../phaser3-rex-notes/templates/ui/sizer/Sizer.js';
import TileContainer from '../tilecontainer/TileContainer.js';
import SidePanel from '../sidepanel/SidePanel.js';

class TopPanel extends Sizer {
    constructor(scene) {
        super(scene, {
            anchor: {
                x: 'center', y: 'center',
                width: '100%', height: '100%'
            },
            orientation: 'x'
        })

        var tilecontainer = new TileContainer(scene);
        scene.add.existing(tilecontainer);

        var sidePanel = new SidePanel(scene);
        scene.add.existing(sidePanel);

        this
            .addSpace()
            .add(tilecontainer, { fitRatio: 1, })
            .add(sidePanel, { expand: true })
            .addSpace()
    }
}

export default TopPanel;