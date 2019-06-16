import State from './State.js';

const GetValue = Phaser.Utils.Objects.GetValue;

export default {
    _init(config) {
        this.scene.physics.add.existing(this, false);

        this.setSpeed(GetValue(config, 'speed', 300));
        this.setFireConeAngle(GetValue(config, 'fireConeAngle', 120));
        this.setPaddles(GetValue(config, 'paddles', undefined));
        this.setBricks(GetValue(config, 'bricks', undefined));

        this.scene.physics.world.setBoundsCollision(
            true, // Left
            true, // Right
            true, // Up
            false // Down
        );

        this.body
            .setCollideWorldBounds(true)
            .setBounce(1);

        this._state = new State(this, config);
    },

    setSpeed(speed) {
        this.speed = speed;
        return this;
    },

    setFireConeAngle(angle) {
        this.coneAngle = angle;
        this.startAngle = -90 - (angle / 2);
        return this;
    },

    setPaddles(paddles) {
        this.paddles = paddles;
        return this;
    },

    setBricks(bricks) {
        this.bricks = bricks;
        return this;
    },

    applySpeed(speed) {
        var factor = speed / this.speed;
        this.speed = speed;
        this.body.velocity.scale(factor);
        return this;
    },

    resetState() {
        this._state.goto('IDLE');
    }
};