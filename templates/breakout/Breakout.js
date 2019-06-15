import Build from '../utils/Build.js';
import Paddle from './Paddle/Paddle.js';
import Ball from './Ball/Ball.js';
import Brick from './Brick/Brick.js';

const GetValue = Phaser.Utils.Objects.GetValue;

class Breakout {
    constructor(config) {
        // Properties
        var speed = GetValue(config, 'speed', 300);
        // Objects
        var balls = GetValue(config, 'balls', []);
        var paddles = GetValue(config, 'paddles', []);
        var bricks = GetValue(config, 'bricks', []);

        Build(paddles, Paddle);
        Build(bricks, Brick);
        Build(balls, Ball, {
            speed: speed,
            paddles: paddles,
            bricks: bricks,
        });
    }

}
export default Breakout;