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

        var createGamePlayBlock = config.createGamePlayBlock;
        var createGamePlayBlockData = config.data;
        var gameplayBlock = createGamePlayBlock(scene, createGamePlayBlockData);
        scene.add.existing(gameplayBlock);

        var sidePanel = new SidePanel(scene);
        scene.add.existing(sidePanel);

        innerSizer
            .add(gameplayBlock)                 // Fixed width, fixed height
            .add(sidePanel, { expand: true })   // Fixed width, expand height

        this.add(innerSizer, {
            align: 'center', expand: false
        })
    }
}

export default GameplayBlock;