import Breatout from '../../../templates/breakout/Breakout.js';

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
        // ---- Custom logic ----
        // Create paddle game object
        var paddle = this.add.rectangle(400, 580, 100, 10).setStrokeStyle(2, COLOR_PRIMARY);
        // Create ball game object
        var ball = this.add.circle(400, 560, 10).setStrokeStyle(2, COLOR_LIGHT);
        // Create brick game objects
        var bricks = [], rowCnt = 6, colCnt = 10;
        for (var i = 0, cnt = rowCnt * colCnt; i < cnt; i++) {
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
        var bricksPool = this.add.group(bricks);
        // ---- Custom logic ----

        // Build breakout system
        var breakout = new Breatout({
            speed: 300,
            paddles: [paddle],
            bricks: bricks,
            balls: [ball],
        });

        // ---- Custom logic ----
        // Event handlers
        breakout
            .on('ball-hit-brick', function (ball, brick) {
                // Disable brick
                brick.kill();
                if (bricksPool.countActive() === 0) {

                }
            })
            .on('ball-hit-paddle', function (ball, paddle) {
                // Speed up ball
                ball.applySpeed(ball.speed * 1.1);
            })
            .on('ball-outofbound', function (ball) {
                ball.resetState();
                ball.setSpeed(300);
            });
        // ---- Custom logic ----
    }

    update() { }
}
export default Game;