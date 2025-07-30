import { SCENE_LEVEL, SCENE_MENU } from '../SceneKeys.js';
import GetAllLevelData from '../../levels/GetAllLevelData.js';
import CreateLevelDialog from './CreateLevelDialog.js';
import Play from '../gameplayscene/Play.js';

class LevelScene extends Phaser.Scene {
    constructor() {
        super({
            key: SCENE_LEVEL
        })
    }

    init() {
    }

    preload() {
        // Image assets are lazy-loading on demand
    }

    async create() {
        // Prepare items of gird table from level data
        var items = GetAllLevelData(this);

        var levelDialog = CreateLevelDialog(this)
            .setItems(items)

        var levelData = await levelDialog.modalPromise({
            duration: { in: 0, out: 0 },    // No popup
            cover: { alpha: 1 }
        });

        if (levelData) {
            Play(this, levelData.$level);
        } else {
            this.scene.start(SCENE_MENU);    // Back to menu scene
        }
    }

    update() { }

}

export default LevelScene;