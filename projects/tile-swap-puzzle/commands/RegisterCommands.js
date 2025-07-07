import RestartGame from './RestartGame.js';
import LoadTextureFromClickboard from './LoadTextureFromClickboard.js';
import UpdateScore from './UpdateScore.js';

var RegisterCommands = function (scene) {
    RestartGame(scene);
    LoadTextureFromClickboard(scene);
    UpdateScore(scene);
}

export default RegisterCommands;