import EventEmitter from '../../../../phaser/src/events/EventEmitter.js';
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

    registerCollisionEvent() {
        var onCollisionstart = function (event) {
            event.pairs.forEach(({ bodyA, bodyB }) => {
                var ballBody, hitTargetBody;
                if (bodyA.label === 'ball') {
                    ballBody = bodyA;
                    hitTargetBody = bodyB;
                } else if (bodyB.label === 'ball') {
                    ballBody = bodyB;
                    hitTargetBody = bodyA;
                }

                if (ballBody) {
                    switch (hitTargetBody.label) {
                        case 'brick':
                            this.emit('hit-brick', hitTargetBody.gameObject);
                            break;

                        case 'floor':
                            this.emit('hit-floor', hitTargetBody.gameObject, this.paddle);
                            break;
                    }
                }
            });
        }
        this.matter.world.on('collisionstart', onCollisionstart, this);

        this.on('destroy', function () {
            this.matter.world.off('collisionstart', onCollisionstart, this);
        }, this)

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