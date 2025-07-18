import 'phaser'
import { SIZE_WIN_WIDTH, SIZE_WIN_HEIGHT } from './scenes/const.js';

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() {
    }

    create() {
        /* ---------- 世界邊界 ---------- */
        this.matter.world.setBounds(
            0, 0, SIZE_WIN_WIDTH, SIZE_WIN_HEIGHT,
            32,
            true, true, true, true
        );

        // 取得下邊界 (bottom wall) 並貼上 label，順便改成感測器 → 不會把球彈回
        const floor = this.matter.world.walls.bottom;
        floor.label = 'floor';
        floor.isSensor = true;      // 只觸發碰撞事件，不反彈

        /* ---------- 板子 (Paddle) ---------- */
        const paddleWidth = 100, paddleHeight = 20;
        const paddle = this.add.rectangle(SIZE_WIN_WIDTH / 2, SIZE_WIN_HEIGHT - 50, paddleWidth, paddleHeight, 0xffffff);
        this.matter.add.gameObject(paddle, {
            isStatic: true,
            label: 'paddle',
            chamfer: { radius: 10 }      // 稍微圓角，避免邊緣卡球
        });

        /* ---------- 球 (Ball) ---------- */
        const ballRadius = 10;
        const ball = this.add.circle(SIZE_WIN_WIDTH / 2, SIZE_WIN_HEIGHT - 80, ballRadius, 0xffcc00);
        this.matter.add.gameObject(ball, { shape: 'circle', label: 'ball' })
            .setFrictionAir(0)
            .setBounce(1)
            .setVelocity(6, -6);

        /* 鼠標 / 觸控：只移動 X，限制在畫面內 */
        this.input.on('pointermove', (pointer) => {
            const limit = 60;  // paddle 半寬
            paddle.setPosition(
                Phaser.Math.Clamp(pointer.x, limit, SIZE_WIN_WIDTH - limit),
                paddle.y
            );
        });

        const cols = 15, rows = 3;
        const startX = 140, startY = 120, gap = 120;
        // ────────── 幾何參數 ──────────
        const side = 40;                          // 正三角形邊長
        const h = side * Math.sqrt(3) / 2;     // 高度
        const fill = 0xff4444;                    // 顏色

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const x = startX + c * gap;
                const y = startY + r * gap;

                // 1. 先建立 Triangle GameObject（純畫面）
                const brick = this.add.triangle(
                    x, y,
                    0, -h / 2,
                    -side / 2, h / 2,
                    side / 2, h / 2,
                    fill
                ).setOrigin(0.5);            // 以中心對齊，與剛體同心

                // 2. 立即掛 Matter 剛體，並指定 shape → 不再需要 setPolygon()
                const gemo = brick.geom;
                this.matter.add.gameObject(brick, {
                    isStatic: true,
                    label: 'brick',
                    shape: {
                        type: 'fromVerts',      // 使用頂點資料產生剛體
                        verts: [gemo.x1, gemo.y1, gemo.x2, geom.y2, gemo.x3, gemo.y3],
                        flagInternal: true       // 讓 Matter 省略內部重覆邊
                    }
                });
            }
        }

        /* --- 監聽球 & 地板碰撞 --- */
        // 方式 1：用 setOnCollideWith（較直覺）
        /* ---------- 重新發球 ---------- */
        function respawnBall() {
            // 把球放回板子正上方，停止移動
            ball.setPosition(paddle.x, paddle.y - 30);
            ball.setVelocity(0, 0);

            // 等玩家點擊或延遲自動發球；這裡示範 0.6 秒後自動發球
            this.time.delayedCall(600, () => {
                const speed = 6;
                // 隨機左或右斜上
                const vx = Phaser.Math.Between(0, 1) ? speed : -speed;
                ball.setVelocity(vx, -speed);
            });
        }

        ball.setOnCollideWith(floor, () => respawnBall.call(this));

        /* ---- 碰撞偵測：球打到磚塊就消除 ---- */
        this.matter.world.on('collisionstart', (evt) => {
            evt.pairs.forEach(({ bodyA, bodyB }) => {
                if ((bodyA.label === 'ball' && bodyB.label === 'brick') ||
                    (bodyB.label === 'ball' && bodyA.label === 'brick')) {

                    const brickBody = bodyA.label === 'brick' ? bodyA : bodyB;
                    if (brickBody.gameObject) brickBody.gameObject.destroy();
                    this.matter.world.remove(brickBody);
                }
            });
        });
    }

    update() { }
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: SIZE_WIN_WIDTH,
    height: SIZE_WIN_HEIGHT,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
        default: 'matter',
        matter: {
            gravity: { y: 0 },
            debug: true             // 開發階段可設 true
        }
    },
    scene: Demo
};

var game = new Phaser.Game(config);