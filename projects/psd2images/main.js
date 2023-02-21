import 'phaser'
import App from './scenes/App.js'

var config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 1024,
    height: 768,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    plugins: {},
    scene: [App],
};

var game = new Phaser.Game(config);