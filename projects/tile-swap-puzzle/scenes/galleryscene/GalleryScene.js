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
        // items: {level, title, image, 'image-url', story, completed}[]
        var levels = GetAllLevelData(this);
        var items = levels.map(function (level, index) {
            return {
                level: index,
                title: level['title-zh'],
                image: level['image'],
                'image-url': level['image-url'],
                story: level['story-zh'],
                completed: level['completed']
            }
        })

        var galleryDialog = CreateGalleryDialog(this);

        galleryDialog.setItems(items);

        await galleryDialog.modalPromise({
            duration: { in: 0, out: 0 },    // No popup
            cover: { alpha: 1 }
        });

        this.scene.start(SCENE_MENU);    // Back to menu scene
    }

    update() { }

}

export default GalleryScene;