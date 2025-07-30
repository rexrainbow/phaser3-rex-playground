import BuildGame from '../../templates/story-blocks/game/BuildGame.js';
import WorldContainer from './worldcontainer/WorldContainer.js';

BuildGame({
    createGameplayBlock(scene, data) {
        var gameObject = new WorldContainer(scene);
        scene.add.existing(gameObject);
        return gameObject;
    },

    configurationURL: 'assets/configuration.yml',

    // ... more phaser game configuration ...
    physics: {
        default: 'matter',
        matter: {
            gravity: { y: 0 },
            debug: false
        }
    }
});