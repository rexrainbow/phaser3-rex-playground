
import { EVT_RESTART_GAME } from './const.js';
import ClickboardToTexture from '../../../../phaser3-rex-notes/plugins/clickboardtotexture.js';

var RestartGame = function (scene) {
    var pingPongKeys = ['image0', 'image1'];
    var pingPongIndex = 0;
    var clickboardToTexture = new ClickboardToTexture(scene)
        .on('paste', async function (clickboardToTexture) {
            var key = pingPongKeys[pingPongIndex];
            pingPongIndex = (pingPongIndex + 1) % 2;
            await clickboardToTexture.saveTexturePromise(key);
            clickboardToTexture.releaseFile();
            scene.events.emit(EVT_RESTART_GAME, key);
        })
}

export default RestartGame;