import BuildGame from '../../templates/story-blocks/game/BuildGame.js';
import TileContainer from './gameplayblock/TileContainer.js';

BuildGame({
    createGameplayBlock(scene, data) {
        var gameObject = new TileContainer(scene);
        scene.add.existing(gameObject);
        return gameObject;
    },

    configurationURL: 'assets/configuration.yml',

    // ... more phaser game configuration ...
});