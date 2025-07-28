import '../../../../phaser/src/phaser.js';
import LoadYamlFromUrl from './LoadYAMLFromURL.js';
import { DATA_KEY_CONFIGURATION } from '../scenes/DataKeys.js';
import BootScene from '../scenes/bootscene/BootScene.js';
import MenuScene from '../scenes/menuscene/MenuScene.js';
import GameplayScene from '../scenes/gameplayscene/GameplayScene.js';
import GalleryScene from '../scenes/galleryscene/GalleryScene.js';
import LevelScene from '../scenes/levelscene/LevelScene.js';
import { SCENE_BOOT, SCENE_MENU, SCENE_GAMEPLAY, SCENE_GALLERY, SCENE_LEVEL } from '../scenes/SceneKeys';

var BuildGame = async function (config) {
    var createGameplayBlock = config.createGameplayBlock;
    delete config.createGameplayBlock;
    // Override default createGameplayBlock method
    GameplayScene.prototype.createGameplayBlock = createGameplayBlock;

    var configurationURL = config.configurationURL;
    delete config.configurationURL;
    // Load configuration YAML file
    var configuration = await LoadYamlFromUrl(configurationURL);

    config = {
        type: Phaser.AUTO,
        parent: 'game',
        width: configuration.WindowSize.width,
        height: configuration.WindowSize.height,
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
        },
        dom: {
            createContainer: true,
            plugins: {},

        },
        ...config
    }
    var game = new Phaser.Game(config);

    game.registry.set(DATA_KEY_CONFIGURATION, configuration);

    // Install scenes
    game.scene.add(SCENE_BOOT, BootScene, false, {});
    game.scene.add(SCENE_MENU, MenuScene, false, {});
    game.scene.add(SCENE_GAMEPLAY, GameplayScene, false, {});
    game.scene.add(SCENE_GALLERY, GalleryScene, false, {});
    game.scene.add(SCENE_LEVEL, LevelScene, false, {});

    // Start boot scene
    game.scene.start(SCENE_BOOT, {});

    return game;
}

export default BuildGame;