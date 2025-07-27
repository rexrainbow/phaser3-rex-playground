
import { EVT_RESUME_GAME } from '../const.js';

var ResumeGame = function () {
    this.events.emit(EVT_RESUME_GAME);
}

export default ResumeGame;