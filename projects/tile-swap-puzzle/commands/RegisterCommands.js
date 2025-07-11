import RestartGame from './RestartGame.js';
import LoadTextureFromClickboard from './LoadTextureFromClickboard.js';
import UpdateScore from './UpdateScore.js';
import BackToMenuScene from './BackToMenuScene.js';

var RegisterCommands = function (scene) {
    RestartGame(scene);
    LoadTextureFromClickboard(scene);
    UpdateScore(scene);
    BackToMenuScene(scene);
}

export default RegisterCommands;