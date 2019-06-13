import Build from '../gameobjects/Build.js';
import Paddle from '../gameobjects/Paddle/Paddle.js';
import Ball from '../gameobjects/Ball/Ball.js';
import Brick from '../gameobjects/Brick/Brick.js';

const COLOR_PRIMARY = 0xe0e0e0;
const COLOR_LIGHT = 0xffffff;
const COLOR_DARK = 0xaeaeae;

class Game extends Phaser.Scene {
    constructor() {
        super({
            key: 'game'
        })

    }

    preload() {
    }

    create() {
        // Create paddle game object
        let paddle = this.add.rectangle(400, 580, 100, 10).setStrokeStyle(2, COLOR_PRIMARY);
        // Create ball game object
        let ball = this.add.circle(400, 560, 10).setStrokeStyle(2, COLOR_LIGHT);
        // Create brick game objects
        let bricks = [], rowCnt = 6, colCnt = 10;
        for (let i = 0, cnt = rowCnt * colCnt; i < cnt; i++) {
            bricks.push(this.add.rectangle(0, 0, 64, 32).setStrokeStyle(2, COLOR_DARK));
        }
        Phaser.Actions.GridAlign(bricks, {
            width: colCnt,
            height: rowCnt,
            cellWidth: bricks[0].width,
            cellHeight: bricks[0].height,
            position: Phaser.Display.Align.TOP_LEFT,
            x: 112,
            y: 100
        });
        let bricksPool = this.add.group(bricks);

        // Compose game objects
        Build(paddle, Paddle);
        Build(bricks, Brick);
        Build(ball, {
            speed: 300,
            paddles: [paddle],
            bricks: bricksPool,
        }, Ball);
    }

    update() { }
}
export default Game;