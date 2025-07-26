import EventEmitter from '../../../../phaser/src/events/EventEmitter.js';
import BackgroundMethods from './BackgroundMethods.js';
import PaddleMethods from './PaddleMethods.js';
import BallMethods from './BallMethods.js';
import BrickMethods from './BrickMethods.js';
import ObstacleMethods from './ObstacleMethods.js';
import RegisterCollisionEvent from './RegisterCollisionEvent.js';
import RegisterTickingEvent from './RegisterTickingEvent.js';

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

        this.ballSpeed = 0;

        RegisterCollisionEvent.call(this);
        RegisterTickingEvent.call(this);
    }

    destroy() {
        this.emit('destroy');

        this.background.destroy();
        this.background = undefined;

        this.paddle.destroy();
        this.paddle = undefined;

        this.ball.destroy();
        this.ball = undefined;

        this.bricksBackgroundImageBox.destroy();
        this.bricksBackgroundImageBox = undefined;
        this.removeBricks();

        this.scene = undefined;
        this.matter = undefined;
    }

    get brickCount() {
        return this.bricks.length;
    }

    registerTickingEvent() {

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
    ObstacleMethods,
)

export default PhysicsWorld;