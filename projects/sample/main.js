// Example of installing plugin
import RexUI from '../../node_modules/phaser3-rex-notes/templates/ui/ui-plugin.js';

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
                mapping: 'rexUI'     // member name in each scene instance
            },
        ]
    },
    scene: [Boot, Game]
};

var game = new Phaser.Game(config);