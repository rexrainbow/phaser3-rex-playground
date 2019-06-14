import RexUI from 'phaser3-rex-notes/templates/ui/ui-plugin'; 
import Game from './scenes/Game.js';

let config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
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
    scene: [Game],
    physics: {
        default: 'arcade'
    }
};

let game = new Phaser.Game(config);