import FSM from 'phaser3-rex-plugins/plugins/fsm.js';

const DegToRad = Phaser.Math.DegToRad;

class State extends FSM {
    constructor(parent) {
        super();
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
        let ball = this.parent;
        let myPaddle = ball.paddles[0];
        if (myPaddle === undefined) {
            return;
        }
        ball.setPosition(
            myPaddle.x,
            myPaddle.y - (myPaddle.height / 2) - (this.parent.geom.radius)
        );
    }

    fire() {
        let ball = this.parent;
        let angle = DegToRad(ball.startAngle + (Math.random() * ball.coneAngle));
        ball.body.setVelocity(ball.speed * Math.cos(angle), ball.speed * Math.sin(angle));
        ball.emit('fire');
        this.goto('BOUNCE');
    }
    // IDLE

    // BOUNCE
    enter_BOUNCE() {
        let ball = this.parent;

        if (ball.paddles) {
            this.paddlesCollider = this.scene.physics.add.collider(ball, ball.paddles, this.hitPaddle, null, this);
        }
        if (ball.bricks) {
            this.bricksCollider = this.scene.physics.add.collider(ball, ball.bricks, this.hitBrick, null, this);
        }
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
    }

    hitPaddle(ball, paddle) {
        let velocityX;
        if (ball.x < paddle.x) {
            //  Ball is on the left-hand side of the paddle
            velocityX = -10 * (paddle.x - ball.x);
        }
        else if (ball.x > paddle.x) {
            //  Ball is on the right-hand side of the paddle
            velocityX = 10 * (ball.x - paddle.x);
        }
        else {
            //  Ball is perfectly in the middle
            //  Add a little random X to stop it bouncing straight up!
            velocityX = 2 + (Math.random() * 8);
        }
        ball.body.setVelocityX(velocityX);
    }

    hitBrick(ball, brick) {
        brick.kill();
    }
    // BOUNCE
}

export default State;