import Methods from './Methods.js';

const EE = Phaser.Events.EventEmitter;
const List = Phaser.Structs.List;

class Model extends EE {
    constructor(scene) {
        super();

        this.scene = scene;

        this.imageDataList = new List();
    }

    destroy() {
        this.imageDataList.removeAll();
        this.imageDataList = null;

        super.destroy();
    }
}

Object.assign(
    Model.prototype,
    Methods
)

export default Model;