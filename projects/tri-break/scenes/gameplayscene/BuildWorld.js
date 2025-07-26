import {
    WORLD_WIDTH, WORLD_HEIGHT,
    WORLD_CENTER_X, WORLD_CENTER_Y, WORLD_LEFT, WORLD_RIGHT, WORLD_BOTTOM, WORLD_BG,

    SLANTED_SIDEA_POINTS, SLANTED_SIDEB_POINTS,
    CORNER_CIRCLEA, CORNER_CIRCLEB,

    BRICKSBG_WIDTH, BRICKSBG_HEIGHT, BRICKSBG_CENTER_X, BRICKSBG_CENTER_Y,
    BRICK_COLOR, BRICK_BOARD_COLOR, BRICK_BOARD_THICKNESS,

    PADDLE_YOFFSET,
    PADDLE_WIDTH, PADDLE_HEIGHT, PADDLE_COLOR,
    BALL_RADIUS, BALL_COLOR, BALL_SPEED,
    WORLD_TOP,
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

    var BoundsStrokeColor = undefined// 0x888888;

    var physicsWorld = new PhysicsWorld(scene)
    physicsWorld
        .addBackground(background)
        .addPolygonObstacle({
            points: SLANTED_SIDEA_POINTS,
            color: 0x0, strokeColor: BoundsStrokeColor
        })
        .addPolygonObstacle({
            points: SLANTED_SIDEB_POINTS,
            color: 0x0, strokeColor: BoundsStrokeColor
        })
        .addCircleObstacle({
            color: 0x0, strokeColor: BoundsStrokeColor,
            ...CORNER_CIRCLEA
        })
        .addCircleObstacle({
            color: 0x0, strokeColor: BoundsStrokeColor,
            ...CORNER_CIRCLEB
        })
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
            physicsWorld.setBallSpeed(BALL_SPEED * (1 + physicsWorld.getEliminatedCount() * 0.1));
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
        .on('pointerup', function () {
            paddle.angle = 0;
        })
        .on('pointerdown', function () {
            if (physicsWorld.isBallInIdleState()) {
                physicsWorld.launchBall(BALL_SPEED, [-30, 30]);
            } else {
                if (paddle.x >= WORLD_CENTER_X) {
                    paddle.angle = -10;
                } else {
                    paddle.angle = 10;
                }
            }

        })

    return physicsWorld;

}

export default BuildWorld;