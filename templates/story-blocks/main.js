import BuildGame from './game/BuildGame.js';
import TileContainer from './gameobjects/gameplay/tilecontainer/TileContainer.js';

BuildGame({
    createGameplayBlock(scene) {
        var gameObject = new TileContainer(scene);
        scene.add.existing(gameObject);
        return gameObject;
    },

    configurationURL: 'assets/configuration.yml',

    // ... more phaser game configuration ...
});