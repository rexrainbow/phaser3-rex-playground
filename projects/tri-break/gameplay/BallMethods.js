const DegToRad = Phaser.Math.DegToRad;

const BALL_STATE_MAP = {
    IDLE: 0,
    ACTIVE: 1
}

export default {
    addBall(ball) {
        this.ball = ball;
        this.matter.add.gameObject(ball, {
            shape: 'circle',
            label: 'ball',
            restitution: 1,
            friction: 0,
            frictionAir: 0,
            slop: 0
        })

        this.setBallState('IDLE').resetBallPosition();

        return this;
    },

    setBallState(state) {
        if (!this.ball) {
            return this;
        }

        if (typeof (state) === 'string') {
            state = BALL_STATE_MAP[state];
        }

        switch (state) {
            case 0: // IDLE
                this.ball.setStatic(true);
                this.ballSpeed = 0;
                break;

            default: // ACTIVE
                this.ball.setStatic(false);
                break;
        }

        return this;
    },

    isBallInIdleState() {
        if (!this.ball) {
            return undefined;
        }
        return this.ball.isStatic();
    },

    isBallInActiveState() {
        if (!this.ball) {
            return undefined;
        }
        return !this.ball.isStatic();
    },

    resetBallPosition() {
        // Put ball above middle of paddle
        if (!this.ball || !this.ball.isStatic() || !this.paddle) {
            return this;
        }

        var x = this.paddle.x;
        var y = this.paddle.y - (this.paddle.displayHeight / 2) - (this.ball.displayHeight / 2);
        this.ball.setPosition(x, y);

        return this;
    },

    launchBall(speed, angle) {
        // Skip this command if ball is in ACTIVE(not isStatic) state
        if (!this.ball || !this.ball.isStatic()) {
            return this;
        }

        this.ballSpeed = speed;

        if (angle === undefined) {
            angle = 0;
        }

        this.setBallState('ACTIVE');

        if (Array.isArray(angle)) {
            angle = Phaser.Math.RND.realInRange(angle[0], angle[1]);
        }

        angle = DegToRad(angle + 270);

        var vx = speed * Math.cos(angle);
        var vy = speed * Math.sin(angle);

        this.ball.setVelocity(vx, vy);

        return this;
    },

    setBallSpeed(speed) {
        var velocity = this.ball.body.velocity;
        var vx = velocity.x, vy = velocity.y;
        var currentSpeed = Math.sqrt(vx * vx + vy * vy) || 1;
        var scale = speed / currentSpeed;
        vx *= scale;
        vy *= scale;
        this.ball.setVelocity(vx, vy);
        return this;
    }

}