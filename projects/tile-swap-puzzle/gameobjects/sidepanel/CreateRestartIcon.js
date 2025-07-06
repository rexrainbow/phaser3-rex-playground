import Button from '../../../../../phaser3-rex-notes/plugins/button';
import { EVT_RESTART_GAME } from '../../commands/const';

var CreateRestartIcon = function (scene, size) {
    var restartIcon = scene.add.image(0, 0, 'restart').setDisplaySize(size, size);
    new Button(restartIcon)
        .on('click', function () {
            scene.events.emit(EVT_RESTART_GAME);
        })

    return restartIcon;
}


export default CreateRestartIcon;