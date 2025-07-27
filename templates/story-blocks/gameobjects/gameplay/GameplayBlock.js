import OverlapSizer from '../../../../../phaser3-rex-notes/templates/ui/overlapsizer/OverlapSizer.js';
import RoundRectangle from '../../../../../phaser3-rex-notes/plugins/roundrectangle.js';
import Sizer from '../../../../../phaser3-rex-notes/templates/ui/sizer/Sizer.js';
import TileContainer from './tilecontainer/TileContainer.js';
import SidePanel from './sidepanel/SidePanel.js';
import {
    COLOR_PANEL_BG, COLOR_PANEL_BOARD,
} from '../../scenes/ColorPalette.js';

class GameplayBlock extends OverlapSizer {
    constructor(scene) {
        super(scene)

        var background = new RoundRectangle(scene, {
            color: COLOR_PANEL_BG,
            strokeWidth: 6,
            strokeColor: COLOR_PANEL_BOARD
        })
        scene.add.existing(background);

        this.addBackground(background);

        var innerSizer = new Sizer(scene, { orientation: 'x' });
        scene.add.existing(innerSizer);

        var tilecontainer = new TileContainer(scene);
        scene.add.existing(tilecontainer);

        var sidePanel = new SidePanel(scene);
        scene.add.existing(sidePanel);

        innerSizer
            .add(tilecontainer)                 // Fixed width, fixed height
            .add(sidePanel, { expand: true })   // Fixed width, expand height

        this.add(innerSizer, {
            align: 'center', expand: false
        })
    }
}

export default GameplayBlock;