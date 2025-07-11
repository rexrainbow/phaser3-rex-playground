import ClickboardToTexture from '../../../../../../phaser3-rex-notes/plugins/clickboardtotexture.js';

var LoadTextureFromClickboard = function (scene) {
    const pingPongKeys = ['image0', 'image1'];
    var pingPongIndex = 0;
    var clickboardToTexture = new ClickboardToTexture(scene)
        .on('paste', async function (clickboardToTexture) {
            var key = pingPongKeys[pingPongIndex];
            pingPongIndex = (pingPongIndex + 1) % 2;
            await clickboardToTexture.saveTexturePromise(key);
            clickboardToTexture.releaseFile();
            scene.restartGame(key);
        })
}

export default LoadTextureFromClickboard;