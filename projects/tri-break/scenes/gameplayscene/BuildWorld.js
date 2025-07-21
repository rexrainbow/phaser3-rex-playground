import {
    WORLD_WIDTH, WORLD_HEIGHT,
    WORLD_CENTER_X, WORLD_CENTER_Y, WORLD_LEFT, WORLD_RIGHT, WORLD_BOTTOM, WORLD_BG,

    BRICKSBG_WIDTH, BRICKSBG_HEIGHT, BRICKSBG_CENTER_X, BRICKSBG_CENTER_Y,
    BRICK_COLOR, BRICK_BOARD_COLOR, BRICK_BOARD_THICKNESS,

    PADDLE_YOFFSET,
    PADDLE_WIDTH, PADDLE_HEIGHT, PADDLE_COLOR,
    BALL_RADIUS, BALL_COLOR, BALL_SPEED,
} from '../Physics.js';
import PhysicsWorld from '../../gameplay/PhysicsWorld.js';
import ImageBox from '../../../../../phaser3-rex-notes/plugins/imagebox.js';

var BuildWorld = function (scene, config) {
    // Create elements

    var background = scene.add.rectangle(WORLD_CENTER_X, WORLD_CENTER_Y, WORLD_WIDTH, WORLD_HEIGHT, WORLD_BG);

    var bricksBackgroundImagebox = new ImageBox(scene, {
        x: BRICKSBG_CENTER_X, y: BRICKSBG_CENTER_Y,
        width: BRICKSBG_WIDTH, height: BRICKSBG_HEIGHT,
        scaleUp: true,
    })
    scene.add.existing(bricksBackgroundImagebox);

    var paddleY = WORLD_BOTTOM + PADDLE_YOFFSET;
    var paddle = scene.add.rectangle(WORLD_CENTER_X, paddleY, PADDLE_WIDTH, PADDLE_HEIGHT, PADDLE_COLOR);

    var ballY = paddleY - (PADDLE_HEIGHT / 2) - BALL_RADIUS;
    var ball = scene.add.circle(WORLD_CENTER_X, ballY, BALL_RADIUS, BALL_COLOR);

    var physicsWorld = new PhysicsWorld(scene)
    physicsWorld
        .addBackground(background)
        .addBricksBackgroundImagebox(bricksBackgroundImagebox)
        .addPaddle(paddle)
        .addBall(ball)
        .start()
        .on('create-brick', function (brick) {
            // Set fill color and stroke color
            brick.setFillStyle(BRICK_COLOR);

            if (BRICK_BOARD_THICKNESS > 0) {
                brick.setStrokeStyle(BRICK_BOARD_THICKNESS, BRICK_BOARD_COLOR);
            }
        })
        .on('hit-brick', function (brick) {
            // Destroy brick when ball is hitting on this brick
            physicsWorld.removeBrick(brick);
        })
        .on('hit-floor', function (ball, paddle) {
            // Put ball above paddle when ball is falling under floor
            physicsWorld.setBallState('IDLE').resetBallPosition()
        })
        .on('clear', function () {
            physicsWorld.pause();
        })

    // Move paddle
    scene.input
        .on('pointermove', function (pointer) {
            physicsWorld.setPaddlePosition(pointer.x);
        })
        .on('pointerdown', function () {
            physicsWorld.launchBall(BALL_SPEED, [-30, 30]);
        })

    return physicsWorld;

}

export default BuildWorld;