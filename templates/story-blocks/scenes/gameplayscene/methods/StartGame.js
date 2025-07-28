
import { EVT_START_GAME } from '../EventName.js';

var StartGame = function () {
    this.events.emit(EVT_START_GAME);
}

export default StartGame;