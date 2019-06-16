import Build from '../utils/Build.js';
import Paddle from './Paddle/Paddle.js';
import Ball from './Ball/Ball.js';
import Brick from './Brick/Brick.js';

const EE = Phaser.Events.EventEmitter;
const GetValue = Phaser.Utils.Objects.GetValue;

class Breakout extends EE {
    constructor(config) {
        super();

        // Properties
        var speed = GetValue(config, 'speed', 300);
        // Objects
        var balls = GetValue(config, 'balls', []);
        var paddles = GetValue(config, 'paddles', []);
        var bricks = GetValue(config, 'bricks', []);

        Build(paddles, Paddle, {
            eventEmitter: this,
        });
        Build(bricks, Brick, {
            eventEmitter: this,
        });
        Build(balls, Ball, {
            speed: speed,
            paddles: paddles,
            bricks: bricks,
            eventEmitter: this,
        });
    }

}
export default Breakout;