import EventEmitter from '../../../../../phaser/src/events/EventEmitter.js';
import BackgroundMethods from './BackgroundMethods.js';
import PaddleMethods from './PaddleMethods.js';
import BallMethods from './BallMethods.js';
import BrickMethods from './BrickMethods.js';

class PhysicsWorld extends EventEmitter {
    constructor(scene) {
        super();

        this.scene = scene;
        this.matter = scene.matter;

        this.background;
        this.paddle;
        this.ball;
        this.bricksBackgroundImageBox;
        this.bricks = [];

        this.registerCollisionEvent();
    }

    destroy() {
        this.background.destroy();
        this.background = undefined;

        this.paddle.destroy();
        this.paddle = undefined;

        this.ball.destroy();
        this.ball = undefined;

        this.bricksBackgroundImageBox.destroy();
        this.bricksBackgroundImageBox = undefined;
        this.removeBricks();

        this.matter.world.off('collisionstart', this.onCollisionstart, this);

        this.scene = undefined;
        this.matter = undefined;
    }

    get brickCount() {
        return this.bricks.length;
    }

    registerCollisionEvent() {
        this.onCollisionstart = function (event) {
            event.pairs.forEach(({ bodyA, bodyB }) => {
                if ((bodyA.label === 'ball' && bodyB.label === 'brick') ||
                    (bodyB.label === 'ball' && bodyA.label === 'brick')) {

                    var brickBody = (bodyA.label === 'brick') ? bodyA : bodyB;
                    this.emit('hit-brick', brickBody.gameObject);
                }

                if ((bodyA.label === 'ball' && bodyB.label === 'floor') ||
                    (bodyB.label === 'ball' && bodyA.label === 'floor')) {

                    var ball = (bodyA.label === 'ball') ? bodyA.gameObject : bodyB.gameObject;

                    this.emit('hit-floor', ball, this.paddle);
                }
            });
        }
        this.matter.world.on('collisionstart', this.onCollisionstart, this);

        return this;
    }

    start() {
        this.resume();
        return this;
    }

    pause() {
        this.matter.world.pause();
        return this;
    }

    resume() {
        this.matter.world.resume();
        return this;
    }
}

Object.assign(
    PhysicsWorld.prototype,
    BackgroundMethods,
    PaddleMethods,
    BallMethods,
    BrickMethods,
)

export default PhysicsWorld;