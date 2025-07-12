import GetLevelData from '../../levels/GetLevelData.js';
import { SCENE_GAMEPLAY } from '../SceneKeys.js';
import { DATA_KEY_LEVEL } from '../const.js';

var Play = function (scene, level) {
    // Level index is started from 0
    var levelData = GetLevelData(scene, level);
    if (!levelData) {
        console.warn(`Level ${level} is not existed`)
    }

    // {level, title, image, 'image-url', story}
    var levelData = {
        level: level,
        title: levelData['title-zh'],
        image: levelData.image,
        'image-url': levelData['image-url'],
        story: levelData['story-zh'],
    }

    // Pass levelData to GamePlayScene
    var gameplayScene = scene.scene.get(SCENE_GAMEPLAY);
    gameplayScene.data.set(DATA_KEY_LEVEL, levelData);

    if (gameplayScene !== scene) {
        // Goto GamePlayScene
        scene.scene.start(SCENE_GAMEPLAY, levelData);
    } else {
        // Start-game again        
        scene.startGame();
    }

}

export default Play;