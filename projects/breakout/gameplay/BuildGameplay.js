import Build from './gameobjects/Build.js';
import Paddle from './gameobjects/Paddle/Paddle.js';
import Ball from './gameobjects/Ball/Ball.js';
import Brick from './gameobjects/Brick/Brick.js';

const GetValue = Phaser.Utils.Objects.GetValue;
var BuildGameplay = function(config) {
    // Properties
    let speed = GetValue(config, 'speed', 300);
    // Objects
    let balls = GetValue(config, 'balls', []);
    let paddles = GetValue(config, 'paddles', []);
    let bricks = GetValue(config, 'bricks', []);

    Build(paddles, Paddle);
    Build(bricks, Brick);
    Build(balls, Ball, {
        speed: speed,
        paddles: paddles,
        bricks: bricks,
    });
};

export default BuildGameplay;