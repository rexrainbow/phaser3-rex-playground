
import { EVT_RESTART_GAME } from '../const.js';

var RestartGame = function (key) {
    this.events.emit(EVT_RESTART_GAME, key);
}

export default RestartGame;