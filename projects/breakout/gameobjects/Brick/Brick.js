const EnableComponent = Phaser.Physics.Arcade.Components.Enable;

export default {
    _init(config) {
        let scene = this.scene;
        scene.physics.add.existing(this, true); // Static object for bouncing
    },

    enableBody: EnableComponent.enableBody,
    rebirth() {
        this.enableBody(false, 0, 0, true, true);
        return this;
    },

    disableBody: EnableComponent.disableBody,
    kill() {
        this.disableBody(true, true);
        return this;
    }
}