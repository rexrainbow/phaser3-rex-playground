import RectangleToTriangles from '../../../../phaser3-rex-notes/plugins/utils/math/rectangletotriangles/delaunay/RectangleToTriangles.js';
import CreateBoundingPolygon from '../../../../phaser3-rex-notes/plugins/utils/shape/polygon/CreateBoundingPolygon.js';

export default {
    addBricksBackgroundImagebox(imageBox) {
        this.bricksBackgroundImageBox = imageBox;
        return this;
    },

    setBricksBackgroundImageKey(key) {
        this.bricksBackgroundImageBox.setTexture(key);
        return this;
    },

    generateBricks(amount) {
        var result = RectangleToTriangles({
            rectangle: this.bricksBackgroundImageBox.image.getBounds(),
            amount: amount,
            triangleOutput: false
        })
        var vertices = result.vertices;
        var indices = result.indices;

        var bricks = [];
        for (var i = 0, cnt = indices.length; i < cnt; i += 3) {
            var p0 = vertices[indices[i + 0]];
            var p1 = vertices[indices[i + 1]];
            var p2 = vertices[indices[i + 2]];
            var points = [{ x: p0[0], y: p0[1] }, { x: p1[0], y: p1[1] }, { x: p2[0], y: p2[1] }];

            var polygonShapeGameObject = CreateBoundingPolygon(this.scene, points);
            scene.add.existing(polygonShapeGameObject);

            bricks.push(polygonShapeGameObject);

            this.emit('create-brick', polygonShapeGameObject);
        }

        this.addBricks(bricks);

        return this;
    },

    addBricks(bricks) {
        // bricks is a list of polygon shape game objects
        this.removeBricks();

        for (var i = 0, cnt = bricks.length; i < cnt; i++) {
            let brick = bricks[i];
            let originXSave = brick.originX;
            let originYSave = brick.originY;
            this.matter.add.gameObject(brick, {
                isStatic: true,
                label: 'brick',
                restitution: 1,
                friction: 0,
                frictionStatic: 0,
                frictionAir: 0,
                inertia: Infinity,
                shape: {
                    type: 'fromVerts',
                    verts: structuredClone(brick.geom.points),
                    flagInternal: true
                }
            });
            // Origin has been changed after adding to matter world, shift position back
            brick.x += (brick.originX - originXSave) * brick.displayWidth;
            brick.y += (brick.originY - originYSave) * brick.displayHeight;
        }

        this.bricks.push(...bricks);

        return this;
    },

    removeBrick(brick) {
        var index = this.bricks.indexOf(brick);
        if (index === -1) {
            return this;

        }

        this.bricks.splice(index, 1);
        brick.destroy();

        if (this.bricks.length === 0) {
            this.emit('clear');
        }

        return this;
    },

    removeBricks() {
        for (var i = 0, cnt = this.bricks.length; i < cnt; i++) {
            this.bricks[i].destroy();
        }

        this.bricks.length = 0;
        return this;
    },

    getBrickCount() {
        return this.bricks.length;
    }
}