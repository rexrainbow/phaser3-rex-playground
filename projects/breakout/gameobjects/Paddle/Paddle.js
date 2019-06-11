import AddControl from './AddControl.js';

export default {
    _init(config) {
        let scene = this.scene;
        scene.physics.add.existing(this, false);
        this.body.setImmovable();

        this.addControl(config);
    },

    addControl: AddControl,
}