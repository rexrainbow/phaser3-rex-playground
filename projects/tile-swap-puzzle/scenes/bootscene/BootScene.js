import { SCENE_BOOT, SCENE_MENU } from '../SceneKeys.js';
import { CANVAS_FONT } from '../const.js';
import InstallLocalStorageData from './InstallLocalStorageData.js';
import LoadLevels from '../../levels/LoadLevels.js';

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
        this.scene.start(SCENE_MENU);
    }

    update() { }
}
export default BootScene;