import HasLevel from './HasLevel.js';
import { DATA_KEY_LEVELS } from '../scenes/DataKeys.js';

var GetLevelData = function (scene, level, locate) {
    if (level === undefined) {
        level = 0;
    }
    if (!HasLevel(scene, level)) {
        return null;
    }

    var rawLevelData = scene.registry.get(DATA_KEY_LEVELS)[level];
    // {level, title, image, 'image-url', story, completed}
    var levelData = {
        level: level,
        // title
        image: rawLevelData.image,
        'image-url': rawLevelData['image-url'],
        // story
        completed: rawLevelData.completed,
    }

    var fallback = (locate === undefined) || (!rawLevelData.hasOwnProperty(`title-${locate}`));
    if (fallback) {
        levelData.title = rawLevelData.title;
        levelData.story = rawLevelData.story;
    } else {
        levelData.title = rawLevelData[`title-${locate}`];
        levelData.story = rawLevelData[`story-${locate}`];
    }

    return levelData;
}

export default GetLevelData;