import { SCENE_GALLERY, SCENE_MENU } from '../SceneKeys.js';
import GetAllLevelData from '../../levels/GetAllLevelData.js';
import CreateGalleryDialog from './CreateGalleryDialog.js';

class GalleryScene extends Phaser.Scene {
    constructor() {
        super({
            key: SCENE_GALLERY
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

        var galleryDialog = CreateGalleryDialog(this)
            .setItems(items);

        await galleryDialog.modalPromise({
            duration: { in: 0, out: 0 },    // No popup
            cover: { alpha: 1 }
        });

        this.scene.start(SCENE_MENU);    // Back to menu scene
    }

    update() { }

}

export default GalleryScene;