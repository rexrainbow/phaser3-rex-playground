import { Structs as PhaserStructs, Events as PhaserEvents } from 'phaser';
import Methods from './Methods.js';

const List = PhaserStructs.List;
const EE = PhaserEvents.EventEmitter;

class Model extends EE {
    constructor(scene) {
        super();

        this.scene = scene;

        this.layerList = new List();
    }

    destroy() {
        this.clearLayerList();
        this.layerList = null;

        super.destroy();
    }
}

Object.assign(
    Model.prototype,
    Methods
)

export default Model;