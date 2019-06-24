import Game from './scenes/Game.js';

var config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [Game],
    physics: {
        default: 'arcade'
    }
};

var game = new Phaser.Game(config);