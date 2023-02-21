import Methods from './Methods.js';

const EE = Phaser.Events.EventEmitter;

class Model extends EE {
    constructor(scene) {
        super();

        this.scene = scene;
    }
}

Object.assign(
    Model.prototype,
    Methods
)

export default Model;