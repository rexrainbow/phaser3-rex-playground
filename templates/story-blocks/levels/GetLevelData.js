import HasLevel from './HasLevel.js';
import { DATA_KEY_LEVELS } from '../scenes/DataKeys.js';

var GetLevelData = function (scene, level, locate) {
    if (level === undefined) {
        level = 0;
    }
    if (!HasLevel(scene, level)) {
        return null;
    }

    var levelData = scene.registry.get(DATA_KEY_LEVELS)[level];
    // {$level, $title, image, 'image-url', $story, $completed}
    var fallback = (locate === undefined) || (!levelData.hasOwnProperty(`title-${locate}`));
    if (fallback) {
        levelData.$title = levelData.title;
        levelData.$story = levelData.story;
    } else {
        levelData.$title = levelData[`title-${locate}`];
        levelData.$story = levelData[`story-${locate}`];
    }

    return levelData;
}

export default GetLevelData;