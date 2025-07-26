import '../../../phaser/src/phaser.js'
import { SIZE_WIN_WIDTH, SIZE_WIN_HEIGHT } from './scenes/Size.js';
import BootScene from './scenes/bootscene/BootScene.js';
import MenuScene from './scenes/menuscene/MenuScene.js';
import GameplayScene from './scenes/gameplayscene/GameplayScene.js';
import GalleryScene from './scenes/galleryscene/GalleryScene.js';
import LevelScene from './scenes/levelscene/LevelScene.js';

const PhysicsConfig = {
    default: 'matter',
    matter: {
        gravity: { y: 0 },
        debug: false
    }
};

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
    physics: PhysicsConfig,
    plugins: {},
    scene: [BootScene, MenuScene, GameplayScene, GalleryScene, LevelScene],
};

var game = new Phaser.Game(config);