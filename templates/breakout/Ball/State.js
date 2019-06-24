import FSM from 'phaser3-rex-plugins/plugins/fsm.js';

const GetValue = Phaser.Utils.Objects.GetValue;
const DegToRad = Phaser.Math.DegToRad;

class State extends FSM {
    constructor(parent, config) {
        super({
            eventEmitter: GetValue(config, 'eventEmitter', parent)
        });
        this.parent = parent; // Ball
        this.scene = parent.scene;
        this.goto('IDLE');
    }

    shutdown() {
        super.shutdown();
        this.parent = undefined;
    }

    destroy() {
        this.goto('OFF');
        this.shutdown();
        return this;
    }

    // IDLE
    enter_IDLE() {
        this.scene.events.on('postupdate', this.followPaddle, this);
        this.scene.input.on('pointerup', this.fire, this);
    }

    exit_IDLE() {
        this.scene.events.off('postupdate', this.followPaddle, this);
        this.scene.input.off('pointerup', this.fire, this);
    }

    followPaddle() {
        var ball = this.parent;
        var myPaddle = ball.paddles[0];
        if (myPaddle === undefined) {
            return;
        }
        ball.setPosition(
            myPaddle.x,
            myPaddle.y - (myPaddle.height / 2) - (this.parent.geom.radius)
        );
    }

    fire() {
        var ball = this.parent;
        var angle = DegToRad(ball.startAngle + (Math.random() * ball.coneAngle));
        ball.body.velocity.setToPolar(angle, ball.speed);
        this.emit('fire');
        this.goto('BOUNCE');
    }
    // IDLE

    // BOUNCE
    enter_BOUNCE() {
        var ball = this.parent;

        if (ball.paddles) {
            this.paddlesCollider = this.scene.physics.add.collider(ball, ball.paddles, this.hitPaddle, null, this);
        }
        if (ball.bricks) {
            this.bricksCollider = this.scene.physics.add.collider(ball, ball.bricks, this.hitBrick, null, this);
        }
        this.exceedBottomBound = false;
        this.scene.events.on('postupdate', this.outOfBound, this);
    }

    exit_BOUNCE() {
        if (this.paddlesCollider) {
            this.scene.physics.world.removeCollider(this.paddlesCollider);
            this.paddlesCollider = undefined;
        }
        if (this.bricksCollider) {
            this.scene.physics.world.removeCollider(this.bricksCollider);
            this.bricksCollider = undefined;
        }
        this.scene.events.off('postupdate', this.outOfBound, this);
    }

    hitPaddle(ball, paddle) {
        this.emit('ball-hit-paddle', ball, paddle);
    }
    hitBrick(ball, brick) {
        this.emit('ball-hit-brick', ball, brick);
    }

    outOfBound() {
        var ball = this.parent;
        if (!this.exceedBottomBound && (ball.y > ball.body.world.bounds.bottom)) {
            this.exceedBottomBound = true;
            this.emit('ball-outofbound', ball);
        }
    }
    // BOUNCE
}

export default State;