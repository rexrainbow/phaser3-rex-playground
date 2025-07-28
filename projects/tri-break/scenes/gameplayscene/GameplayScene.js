import { SCENE_GAMEPLAY, SCENE_MENU } from '../SceneKeys.js';
import { EVT_AFTER_LAYOUT } from './const.js';
import Methods from './methods/Methods.js';
// import LoadTextureFromClickboard from './methods/LoadTextureFromClickboard.js';
import CreateGameplayDialog from './CreateGameplayDialog.js';

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

    async create() {
        var gameplayDialog = CreateGameplayDialog(this, {
            createGamePlayBlock: this.createGameplayBlock
        });

        this.events.emit(EVT_AFTER_LAYOUT);

        this.startGame();

        await gameplayDialog.modalPromise({
            duration: { in: 0, out: 0 },    // No popup
            cover: { alpha: 1 }
        });

        this.scene.start(SCENE_MENU);    // Back to menu scene
    }

    update() { }
}

Object.assign(
    GameplayScene.prototype,
    Methods
)
export default GameplayScene;