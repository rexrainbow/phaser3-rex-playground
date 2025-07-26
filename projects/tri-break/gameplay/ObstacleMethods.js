import CreateBoundingPolygon from '../../../../phaser3-rex-notes/plugins/utils/shape/polygon/CreateBoundingPolygon.js';

const GetValue = Phaser.Utils.Objects.GetValue;
const IsPlainObject = Phaser.Utils.Objects.IsPlainObject;

var SetStyle = function (shapeGameObject, config) {
    var color = GetValue(config, 'color');
    var alpha = GetValue(config, 'alpha', 1);
    if (color !== undefined) {
        shapeGameObject.setFillStyle(color, alpha);
    }

    var strokeColor = GetValue(config, 'strokeColor');
    var strokeWidth = GetValue(config, 'strokeWidth', 3);
    var strokeAlpha = GetValue(config, 'strokeAlpha', 1);
    if (strokeColor !== undefined) {
        shapeGameObject.setStrokeStyle(strokeWidth, strokeColor, strokeAlpha);
    }

    return shapeGameObject;
}

export default {
    addPolygonObstacle(obstacle, label) {
        if (IsPlainObject(obstacle)) {
            var config = obstacle;
            var points = GetValue(config, 'points');
            obstacle = CreateBoundingPolygon(this.scene, points);
            this.scene.add.existing(obstacle);

            SetStyle(obstacle, config);

            label = GetValue(config, 'label');
        }

        if (label === undefined) {
            label = 'obstacle';
        }

        let originXSave = obstacle.originX;
        let originYSave = obstacle.originY;
        this.matter.add.gameObject(obstacle, {
            isStatic: true,
            label: label,
            shape: {
                type: 'fromVerts',
                verts: structuredClone(obstacle.geom.points),
                flagInternal: true
            }
        });
        // Origin has been changed after adding to matter world, shift position back
        obstacle.x += (obstacle.originX - originXSave) * obstacle.displayWidth;
        obstacle.y += (obstacle.originY - originYSave) * obstacle.displayHeight;

        return this;
    },

    addCircleObstacle(obstacle, label) {
        if (IsPlainObject(obstacle)) {
            var config = obstacle;
            var x = GetValue(config, 'x');
            var y = GetValue(config, 'y');
            var radius = GetValue(config, 'radius');
            obstacle = this.scene.add.circle(x, y, radius);

            SetStyle(obstacle, config);

            label = GetValue(config, 'label');
        }
        if (label === undefined) {
            label = 'obstacle';
        }

        this.matter.add.gameObject(obstacle, {
            shape: 'circle',
            label: label,
            isStatic: true,
        })

        return this;
    }

}