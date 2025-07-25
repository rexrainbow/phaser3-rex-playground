import 'phaser'
import RexUI from '../../../phaser3-rex-notes/templates/ui/ui-plugin.js';

import Boot from './scenes/Boot.js';
import Game from './scenes/Game.js';

var config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.ENVELOP,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    plugins: {
        scene: [
            {
                key: 'rexUI',
                plugin: RexUI,
                mapping: 'rexUI'
            },
        ]
    },
    scene: [Boot, Game]
};

var game = new Phaser.Game(config);