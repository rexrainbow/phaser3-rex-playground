import { SCENE_BOOT, SCENE_MENU } from '../SceneKeys.js';
import { CANVAS_FONT } from '../Font.js';
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
        this.load.atlas('icons', 'assets/icons/icons.png', 'assets/icons/icons.json');
        this.load.font(CANVAS_FONT, 'assets/fonts/jf-openhuninn-2.1.ttf');

        // Store configuration json at key DATA_KEY_CONFIGURATION
        LoadLevels(this);
    }

    create() {
        CompleteLevel(this, 0); // Open 1st level for testing

        this.scene.start(SCENE_MENU);
    }

    update() { }
}
export default BootScene;