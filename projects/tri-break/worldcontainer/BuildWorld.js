import {
    TOP_INDENT, BOTTOM_INDENT,

    BRICKSBG_WIDTH, BRICKSBG_HEIGHT,
    BRICK_COLOR, BRICK_BOARD_COLOR, BRICK_BOARD_THICKNESS,

    PADDLE_YOFFSET,
    PADDLE_WIDTH, PADDLE_HEIGHT, PADDLE_COLOR,
    BALL_RADIUS, BALL_COLOR, BALL_SPEED,
} from './Physics.js';
import PhysicsWorld from '../gameplay/PhysicsWorld.js';
import ImageBox from '../../../../phaser3-rex-notes/plugins/imagebox.js';

var BuildWorld = function (background) {
    // Create elements
    var scene = background.scene;
    var physicsWorld = new PhysicsWorld(scene).addBackground(background);

    var worldLeft = physicsWorld.WorldLeft,
        worldRight = physicsWorld.WorldRight,
        worldTop = physicsWorld.WorldTop,
        worldBottom = physicsWorld.WorldBottom,
        worldCenterX = physicsWorld.WorldCenterX,
        worldCenterY = physicsWorld.WorldCenterY;

    var bricksBackgroundImagebox = new ImageBox(scene, {
        x: worldCenterX,
        y: worldTop + (BRICKSBG_HEIGHT / 2) + TOP_INDENT,
        width: BRICKSBG_WIDTH, height: BRICKSBG_HEIGHT,
        scaleUp: true,
    })
    scene.add.existing(bricksBackgroundImagebox);

    var paddleY = worldBottom + PADDLE_YOFFSET;
    var paddle = scene.add.rectangle(worldCenterX, paddleY, PADDLE_WIDTH, PADDLE_HEIGHT, PADDLE_COLOR);

    var ballY = paddleY - (PADDLE_HEIGHT / 2) - BALL_RADIUS;
    var ball = scene.add.circle(worldCenterX, ballY, BALL_RADIUS, BALL_COLOR);

    var BoundsColor = undefined //0x0;
    var BoundsStrokeColor = undefined// 0x888888;

    var physicsWorld = new PhysicsWorld(scene)
    physicsWorld
        .addBackground(background)
        .addPolygonObstacle({
            points: [
                { x: worldLeft, y: worldTop },
                { x: worldLeft, y: worldBottom },
                { x: worldLeft + BOTTOM_INDENT, y: worldBottom },
            ],
            color: BoundsColor, strokeColor: BoundsStrokeColor
        })
        .addPolygonObstacle({
            points: [
                { x: worldRight, y: worldTop },
                { x: worldRight, y: worldBottom },
                { x: worldRight - BOTTOM_INDENT, y: worldBottom },
            ],
            color: BoundsColor, strokeColor: BoundsStrokeColor
        })
        .addCircleObstacle({
            x: worldLeft, y: worldTop, radius: TOP_INDENT,
            color: BoundsColor, strokeColor: BoundsStrokeColor,
        })
        .addCircleObstacle({
            x: worldRight, y: worldTop, radius: TOP_INDENT,
            color: BoundsColor, strokeColor: BoundsStrokeColor,
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
            physicsWorld.setBallSpeed(BALL_SPEED * (1 + physicsWorld.getEliminatedCount() * 0.5));
        })
        .on('hit-floor', function (ball, paddle) {
            // Put ball above paddle when ball is falling under floor
            physicsWorld.setBallState('IDLE').resetBallPosition()
        })
        .on('clear', function () {
            physicsWorld.setBallState('IDLE').resetBallPosition();
        })

    // Move paddle
    var MovePaddle = function (pointer) {
        physicsWorld.setPaddlePosition(pointer.x);
    };
    var TiltPaddle = function (pointer) {
        if (physicsWorld.isBallInIdleState()) {
            physicsWorld.launchBall(BALL_SPEED, [-30, 30]);
        } else {
            if (paddle.x >= worldCenterX) {
                paddle.angle = -10;
            } else {
                paddle.angle = 10;
            }
        }
    }
    var ResetTiltPaddle = function (pointer) {
        paddle.angle = 0;
    }

    background.setInteractive()
        .on('pointermove', MovePaddle)
        .on('pointerdown', TiltPaddle)
        .on('pointerup', ResetTiltPaddle)

    physicsWorld.on('destroy', function () {
        background
            .off('pointermove', MovePaddle)
            .off('pointerdown', TiltPaddle)
            .off('pointerup', ResetTiltPaddle)
    })


    return physicsWorld;

}

export default BuildWorld;