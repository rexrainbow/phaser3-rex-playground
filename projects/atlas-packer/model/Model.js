import Methods from './Methods.js';

const EE = Phaser.Events.EventEmitter;
const List = Phaser.Structs.List;

class Model extends EE {
    constructor() {
        super();

        this.imageDataList = new List();
    }

    destroy() {
        this.imageDataList.removeAll();
        this.imageDataList = null;

        super.destroy();
    }

    // Internal
    hasImage(key) {
        return !!this.imageDataList.getByName(key);
    }

}

Object.assign(
    Model.prototype,
    Methods,
)

export default Model;