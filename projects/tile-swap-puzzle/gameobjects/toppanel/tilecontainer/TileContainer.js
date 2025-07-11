import { EVT_RESTART_GAME } from '../../../scenes/GameplayScene/const.js';
import OverlapSizer from '../../../../../../phaser3-rex-notes/templates/ui/overlapsizer/OverlapSizer.js';
import AddSceneEvent from '../../../../../../phaser3-rex-notes/plugins/utils/gameobject/addevent/AddSceneEvent.js';
import FitTo from '../../../../../../phaser3-rex-notes/plugins/utils/size/FitTo.js';
import GenerateTiles from './GenerateTiles.js';
import ShuffleTiles from './ShuffleTiles.js';

const SIZE = 1024;

class TileContainer extends OverlapSizer {
    constructor(scene) {
        super(scene, { width: SIZE + 40, height: SIZE + 40 });

        var background = scene.add.rectangle(0, 0, 1, 1).setStrokeStyle(2, 0xffffff);
        this.addBackground(background);

        this.targetSize = { width: SIZE, height: SIZE };
        this.targetImage = scene.add.image(0, 0).setVisible(false);
        this.add(this.targetImage, { align: 'center', expand: false });

        this.easeDuration = 200;
        this.tilePool;
        this.activeTiles;

        AddSceneEvent(this, EVT_RESTART_GAME, function (key) {
            scene.setScore(0);
            if (key) {
                this.setTargetImageKey(key);
            }
            this.generatePieces();
            this.shuffleTiles();
        }, this);

    }

    setTargetImageKey(key) {
        var image = this.targetImage;
        image.setTexture(key);
        FitTo(image, this.targetSize, 0, image);
        return this;
    }

    generatePieces() {
        this.tilePool = this.activeTiles;
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
}

export default TileContainer;