
import { EVT_PAUSE_GAME } from '../const.js';

var PauseGame = function () {
    this.events.emit(EVT_PAUSE_GAME);
}

export default PauseGame;