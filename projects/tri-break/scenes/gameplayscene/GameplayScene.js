import { SCENE_GAMEPLAY } from '../SceneKeys.js';
import BuildWorld from './BuildWorld.js';

class GamePlayScene extends Phaser.Scene {
    constructor() {
        super({
            key: SCENE_GAMEPLAY
        })
    }

    preload() {
        this.load.image('sample0', 'assets/images/sample0.webp');
        this.load.image('sample1', 'assets/images/sample1.webp');
    }

    create() {
        var physicsWorld = BuildWorld(this)
            // Load image
            .setBricksBackgroundImageKey('sample1')
            // Generate bricks
            .generateBricks(10)

    }
}

export default GamePlayScene;