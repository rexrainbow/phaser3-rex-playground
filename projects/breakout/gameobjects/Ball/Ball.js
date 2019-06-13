import State from './State.js';

const GetValue = Phaser.Utils.Objects.GetValue;

export default {
    _init(config) {
        this.setSpeed(GetValue(config, 'speed', 300));
        this.setFireConeAngle(GetValue(config, 'fireConeAngle', 120));
        this.setPaddles(GetValue(config, 'paddles', undefined));
        this.setBricks(GetValue(config, 'bricks', undefined));

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
        if (paddles === undefined) {
            this.paddles = undefined;
        } else {
            this.paddles = paddles;
        }
        return this;
    },

    setBricks(bricks) {
        if (bricks === undefined) {
            this.bricks = undefined;
        } else {
            this.bricks = bricks;
        }
        return this;
    },
};