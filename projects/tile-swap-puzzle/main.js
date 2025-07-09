import 'phaser'
import { SIZE_WIN_WIDTH, SIZE_WIN_HEIGHT } from './scenes/const.js';
import App from './scenes/App.js';

var config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: SIZE_WIN_WIDTH,
    height: SIZE_WIN_HEIGHT,
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