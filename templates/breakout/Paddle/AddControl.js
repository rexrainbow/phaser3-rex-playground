const GetValue = Phaser.Utils.Objects.GetValue;
const Clamp = Phaser.Math.Clamp;

export default function (config) {
    // Controlled by mouse/touch moving
    var move = (function (pointer) {
        this.x = Clamp(pointer.x,
            0 + (this.width * this.originX), // Left bound
            this.scene.cameras.main.width - (this.width * (1 - this.originX)) // Right bound
        );
    }).bind(this);

    var scene = this.scene;
    scene.input.on('pointermove', move);

    this.on('destroy', function () {
        scene.input.off('pointermove', move);
    }, this);
};