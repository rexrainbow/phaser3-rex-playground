
import { EVT_PAUSE_GAME } from '../EventName.js';

var PauseGame = function () {
    this.events.emit(EVT_PAUSE_GAME);
}

export default PauseGame;