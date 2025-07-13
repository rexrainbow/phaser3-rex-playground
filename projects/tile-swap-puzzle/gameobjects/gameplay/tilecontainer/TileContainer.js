import { EVT_START_GAME } from '../../../scenes/gameplayscene/const.js';
import OverlapSizer from '../../../../../../phaser3-rex-notes/templates/ui/overlapsizer/OverlapSizer.js';
import AddSceneEvent from '../../../../../../phaser3-rex-notes/plugins/utils/gameobject/addevent/AddSceneEvent.js';
import FitTo from '../../../../../../phaser3-rex-notes/plugins/utils/size/FitTo.js';
import GenerateTiles from './GenerateTiles.js';
import ShuffleTiles from './ShuffleTiles.js';
import { DATA_KEY_LEVEL } from '../../../scenes/DataKeys.js';
import Spinner from '../../../../../../phaser3-rex-notes/templates/ui/aiospinner/AIOSpinner.js'
import LoadCompletePromise from '../../../../../../phaser3-rex-notes/plugins/utils/loader/LoadCompletePromise.js';

const SIZE = 1024;

class TileContainer extends OverlapSizer {
    constructor(scene) {
        // Fixed width, fixed height
        super(scene, { width: SIZE + 40, height: SIZE + 40 });

        //var background = scene.add.rectangle(0, 0, 1, 1).setStrokeStyle(2, 0xffffff);
        //this.addBackground(background);

        this.targetSize = { width: SIZE, height: SIZE };
        this.targetImage = scene.add.image(0, 0).setVisible(false);
        this.add(this.targetImage, { align: 'center', expand: false });

        this.easeDuration = 200;
        this.tilePool = [];
        this.activeTiles = [];

        AddSceneEvent(this, EVT_START_GAME, this.onStartGame, this);

    }

    async onStartGame() {
        var scene = this.scene;
        scene.setScore(0);

        var levelData = scene.data.get(DATA_KEY_LEVEL);
        var key = levelData.image
        if (!scene.textures.exists(key)) {
            this.clearTargetImage();
            await this.waitUntilTextureLoaded(key, levelData['image-url']);

            // Stop execution if this game object is destroyed
            if (!this.scene) {
                return;
            }
        }

        this.setTargetImageKey(key);
        this.generatePieces();
        this.shuffleTiles();
    }

    setTargetImageKey(key) {
        var image = this.targetImage;
        image.setTexture(key);
        FitTo(image, this.targetSize, 0, image);
        return this;
    }

    generatePieces() {
        if (this.activeTiles.length > this.tilePool) {
            this.tilePool = this.activeTiles;
        }
        for (var i = 0, cnt = this.tilePool.length; i < cnt; i++) {
            this.setChildVisible(this.tilePool[i], false);
        }

        this.activeTiles = GenerateTiles(this.targetImage, this.tilePool);

        var tiles = this.activeTiles;
        for (var i = 0, cnt = tiles.length; i < cnt; i++) {
            var tile = tiles[i];
            this.pin(tile, {
                syncPosition: false,
            });

            tile
                .setTargetPosition(tile.x, tile.y)
                .setActiveTiles(tiles);
        }
        return this;
    }

    shuffleTiles() {
        ShuffleTiles(this.activeTiles, this.easeDuration);
        return this;
    }

    clearTargetImage() {
        for (var i = 0, cnt = this.activeTiles.length; i < cnt; i++) {
            this.setChildVisible(this.activeTiles[i], false);
        }

        return this;
    }

    async waitUntilTextureLoaded(key, url) {
        var scene = this.scene;

        // Add a temporary spinner
        var spinner = new Spinner(scene, {
            x: this.x, y: this.y,
            width: 1024 * 0.6, height: 1024 * 0.6,
            animationMode: 'ios',
        });
        scene.add.existing(spinner);

        await LoadCompletePromise(scene, {
            type: 'image',
            key: key, url: url,
        })

        spinner.destroy();
        // Remove spinner
    }
}

export default TileContainer;