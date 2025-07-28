import OverlapSizer from '../../../../../phaser3-rex-notes/templates/ui/overlapsizer/OverlapSizer.js';
import RoundRectangle from '../../../../../phaser3-rex-notes/plugins/roundrectangle.js';
import Sizer from '../../../../../phaser3-rex-notes/templates/ui/sizer/Sizer.js';
import SidePanel from './sidepanel/SidePanel.js';
import GetColorPalette from '../../scenes/utils/GetColorPalette.js';

class GameplayBlock extends OverlapSizer {
    constructor(scene, config) {
        super(scene);

        var colorPalette = GetColorPalette(scene);

        var background = new RoundRectangle(scene, {
            color: colorPalette.PANEL_BG,
            strokeWidth: 6,
            strokeColor: colorPalette.PANEL_BOARD
        })
        scene.add.existing(background);

        this.addBackground(background);

        var innerSizer = new Sizer(scene, { orientation: 'x' });
        scene.add.existing(innerSizer);

        var gamePlayBlock = config.createGamePlayBlock(scene);
        scene.add.existing(gamePlayBlock);

        var sidePanel = new SidePanel(scene);
        scene.add.existing(sidePanel);

        innerSizer
            .add(gamePlayBlock)                 // Fixed width, fixed height
            .add(sidePanel, { expand: true })   // Fixed width, expand height

        this.add(innerSizer, {
            align: 'center', expand: false
        })
    }
}

export default GameplayBlock;