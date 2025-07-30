import { WORLD_WIDTH, WORLD_HEIGHT, WORLD_BG } from './Physics.js';
import BuildWorld from './BuildWorld.js';
import { EVT_AFTER_LAYOUT, EVT_START_GAME, EVT_COMPLETE_GAME, EVT_PAUSE_GAME, EVT_RESUME_GAME } from '../../../templates/story-blocks/scenes/gameplayscene/EventName.js';
import OverlapSizer from '../../../../phaser3-rex-notes/templates/ui/overlapsizer/OverlapSizer.js';
import AddSceneEvent from '../../../../phaser3-rex-notes/plugins/utils/gameobject/addevent/AddSceneEvent.js';
import { DATA_KEY_LEVEL } from '../../../templates/story-blocks/scenes/DataKeys.js';
import Spinner from '../../../../phaser3-rex-notes/templates/ui/aiospinner/AIOSpinner.js'
import LoadCompletePromise from '../../../../phaser3-rex-notes/plugins/utils/loader/LoadCompletePromise.js';

class WorldContainer extends OverlapSizer {
    constructor(scene) {
        // Fixed width, fixed height
        super(scene, { width: WORLD_WIDTH, height: WORLD_HEIGHT });

        this.world;
        this.background = scene.add.rectangle(0, 0, 1, 1, WORLD_BG).setStrokeStyle(2, 0xffffff);
        this.addBackground(this.background);

        AddSceneEvent(this, EVT_AFTER_LAYOUT, this.buildWorld, this);
        AddSceneEvent(this, EVT_START_GAME, this.onStartGame, this);
        AddSceneEvent(this, EVT_PAUSE_GAME, this.onPauseGame, this);
        AddSceneEvent(this, EVT_RESUME_GAME, this.onResumeGame, this);
        AddSceneEvent(this, EVT_COMPLETE_GAME, this.onCompleteGame, this);

    }

    // Invoke this method after `layout()`
    buildWorld() {
        this.world = BuildWorld(this.background);

        this.on('destroy', function () {
            this.world.destroy();
        }, this)

        this.world.on('hit-brick', function () {
            var progress = this.world.getProgress();
            var score = Math.floor(progress * 100);
            this.scene.setScore(score);
        }, this);

        return this;
    }

    async onStartGame() {
        var scene = this.scene;
        scene.setScore(0);

        var levelData = scene.data.get(DATA_KEY_LEVEL);
        var key = levelData.image;
        if (!scene.textures.exists(key)) {
            this.clearTargetImage();
            await this.waitUntilTextureLoaded(key, levelData['image-url']);

            // Stop execution if this game object is destroyed
            if (!this.scene) {
                return;
            }
        }

        this.setTargetImageKey(key)
        this.generateBricks();
        this.world.start();
    }

    onPauseGame() {
        this.world.pause();
    }

    onResumeGame() {
        this.world.resume();
    }

    setTargetImageKey(key) {
        this.world.setBricksBackgroundImageKey(key);
        return this;
    }

    clearTargetImage() {
        this.world.setBricksBackgroundImageKey();
        this.world.removeBricks();
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

    generateBricks() {
        this.world.generateBricks(10);
    }

    onCompleteGame() {
        this.world.removeBricks();
        return this;
    }
}

export default WorldContainer;