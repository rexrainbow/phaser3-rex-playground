import OverlapSizer from '../../../../../../phaser3-rex-notes/templates/ui/overlapsizer/OverlapSizer.js';

const SIZE = 1024;

var CreateGameplayBlock = function (scene) {
    var gameplayBlock = new OverlapSizer(scene, { width: SIZE + 40, height: SIZE + 40 });
    scene.add.existing(gameplayBlock);

    return gameplayBlock;
}

export default CreateGameplayBlock;