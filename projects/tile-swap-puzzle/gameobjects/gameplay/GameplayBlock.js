import OverlapSizer from '../../../../../phaser3-rex-notes/templates/ui/overlapsizer/OverlapSizer.js';
import Sizer from '../../../../../phaser3-rex-notes/templates/ui/sizer/Sizer.js';
import TileContainer from './tilecontainer/TileContainer.js';
import SidePanel from './sidepanel/SidePanel.js';

class GameplayBlock extends OverlapSizer {
    constructor(scene) {
        super(scene, {
            anchor: {
                x: 'center', y: 'center',
                width: '100%', height: '100%'
            },
        })

        var innerSizer = CreateInnerSizer(scene);

        this.add(innerSizer, {
            align: 'center', expand: false
        })
    }
}

var CreateInnerSizer = function (scene) {
    var innerSizer = new Sizer(scene, { orientation: 'x' });
    scene.add.existing(innerSizer);

    var tilecontainer = new TileContainer(scene);
    scene.add.existing(tilecontainer);

    var sidePanel = new SidePanel(scene);
    scene.add.existing(sidePanel);

    innerSizer
        .add(tilecontainer)
        .add(sidePanel, { expand: true })

    return innerSizer;
}

export default GameplayBlock;