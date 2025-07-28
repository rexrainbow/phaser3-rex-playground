import { SCENE_BOOT, SCENE_MENU } from '../SceneKeys.js';
import { DATA_KEY_CONFIGURATION } from '../DataKeys.js';
import InstallLocalStorageData from './InstallLocalStorageData.js';
import LoadLevels from '../../levels/LoadLevels.js';
import CompleteLevel from '../../levels/CompleteLevel.js';

class BootScene extends Phaser.Scene {
    constructor() {
        super({
            key: SCENE_BOOT
        })
    }

    init() {
        InstallLocalStorageData(this);
    }

    preload() {
        // Load assets
        var configuration = this.registry.get(DATA_KEY_CONFIGURATION);
        this.load.pack('boot', { boot: { files: configuration.Assets } });

        LoadLevels(this);
    }

    create() {
        CompleteLevel(this, 0); // Open 1st level for testing

        this.scene.start(SCENE_MENU);
    }

    update() { }
}
export default BootScene;