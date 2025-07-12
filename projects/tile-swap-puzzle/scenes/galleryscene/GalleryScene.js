import { SCENE_GALLERY, SCENE_MENU } from '../SceneKeys.js';
import { DATA_KEY_LEVELS } from '../const.js';
import CreateGalleryDialog from '../../gameobjects/gallery/CreateGalleryDialog.js';

class GalleryScene extends Phaser.Scene {
    constructor() {
        super({
            key: SCENE_GALLERY
        })
    }

    init() {
    }

    preload() {
    }

    async create() {
        var levels = this.registry.get(DATA_KEY_LEVELS);
        var items = levels.map(function (level) {
            return {
                title: level['title-zh'],
                image: level['image'],
                'image-url': level['image-url'],
                story: level['story-zh']
            }
        })

        await CreateGalleryDialog(this, items); // Modal
        this.scene.start(SCENE_MENU);    // Back to menu scene
    }

    update() { }

}

export default GalleryScene;