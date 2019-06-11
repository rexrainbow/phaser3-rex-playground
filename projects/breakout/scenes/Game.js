import AddPaddle from '../gameobjects/Paddle/Add.js';
import AddBall from '../gameobjects/Ball/Add.js';

class Game extends Phaser.Scene {
    constructor() {
        super({
            key: 'game'
        })

    }

    preload() {
    }

    create() {
        let paddle = this.add.rectangle(400, 580, 100, 10, 0xffffff);
        let ball = this.add.circle(400, 560, 10, 0xffffff);

        paddle = AddPaddle(paddle);
        ball = AddBall(ball, {
            speed: 300,
            paddles: [paddle],
        });
    }

    update() { }
}
export default Game;