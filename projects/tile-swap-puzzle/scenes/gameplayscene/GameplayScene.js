import { SCENE_GAMEPLAY } from '../SceneKeys.js';
import Methods from './methods/Methods.js';
// import LoadTextureFromClickboard from './methods/LoadTextureFromClickboard.js';
import GameplayBlock from '../../gameobjects/gameplay/GameplayBlock.js';

class GameplayScene extends Phaser.Scene {
    constructor() {
        super({
            key: SCENE_GAMEPLAY
        })
    }

    init() {
        // LoadTextureFromClickboard(this);

        this.setScore(undefined);
    }

    preload() {
        // {level, title, image, 'image-url', story}
        // Lazy loading texture in TileContainer
    }

    create() {
        var topPanel = new GameplayBlock(this).layout();
        this.add.existing(topPanel);

        this.startGame();
    }

    update() { }
}

Object.assign(
    GameplayScene.prototype,
    Methods
)
export default GameplayScene;