import 'phaser'
import App from './scenes/App.js';

var config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 1920,
    height: 1080,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    parent: 'game',
    dom: {
        createContainer: true
    },
    plugins: {},
    scene: [App],
};

var game = new Phaser.Game(config);