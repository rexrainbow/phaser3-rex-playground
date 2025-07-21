import {
    WORLD_LEFT, WORLD_RIGHT, WORLD_BOTTOM, PADDLE_YOFFSET,
    WORLD_CENTER_X
} from '../scenes/Physics.js';

const Clamp = Phaser.Math.Clamp;

export default {
    addPaddle(paddle) {
        this.paddle = paddle;
        this.matter.add.gameObject(paddle, {
            isStatic: true,
            label: 'paddle',
            // restitution: 1,
            // friction: 0,
            // frictionStatic: 0,
            // frictionAir: 0,
            inertia: Infinity,
            chamfer: { radius: 10 }
        });

        this.resetPaddlePosition();

        return this;
    },

    resetPaddlePosition() {
        if (!this.paddle) {
            return this;
        }

        // Place paddle at centerY of world
        var x = WORLD_CENTER_X;
        var y = WORLD_BOTTOM + PADDLE_YOFFSET - (this.paddle.displayHeight / 2);

        this.setPaddlePosition(x, y);

        return this;
    },

    setPaddlePosition(x, y) {
        if (!this.paddle) {
            return this;
        }

        if (y === undefined) {
            y = this.paddle.y;
        }

        var limit = this.paddle.displayWidth / 2;
        x = Clamp(x, WORLD_LEFT + limit, WORLD_RIGHT - limit);
        this.paddle.setPosition(x, y);

        // Put ball above middle of paddle, if ball is in IDLE state
        if (this.ball && this.isBallInIdleState()) {
            this.resetBallPosition();
        }

        return this;
    }
}