import State from './State.js';

const GetValue = Phaser.Utils.Objects.GetValue;

export default {
    _init(config) {
        this.setSpeed(GetValue(config, 'speed', 300));
        this.setFireConeAngle(GetValue(config, 'fireConeAngle', 120));
        this.setPaddles(GetValue(config, 'paddles', undefined));

        let scene = this.scene;
        scene.physics.add.existing(this, false);
        scene.physics.world.setBoundsCollision(
            true, // Left
            true, // Right
            true, // Up
            false // Down
        );

        this.body.setCollideWorldBounds(true).setBounce(1);

        this._state = new State(this);
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
        if (!Array.isArray(paddles)) {
            paddles = [paddles];
        }
        this.paddles = paddles;
        return this;
    },
};