
import { EVT_RESTART_GAME } from './const.js';

var RestartGame = function (scene) {
    scene.restartGame = function (key) {
        scene.events.emit(EVT_RESTART_GAME, key);
    }
}

export default RestartGame;