const Clamp = Phaser.Math.Clamp;

export default {
    addPaddle(paddle) {
        this.paddle = paddle;
        this.matter.add.gameObject(paddle, {
            isStatic: true,
            label: 'paddle',
            friction: 0,
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
        this.setPaddlePosition(this.WorldCenterX, this.paddle.y);

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
        x = Clamp(x, this.WorldLeft + limit, this.WorldRight - limit);
        this.paddle.setPosition(x, y);

        // Put ball above middle of paddle, if ball is in IDLE state
        if (this.ball && this.isBallInIdleState()) {
            this.resetBallPosition();
        }

        return this;
    }
}