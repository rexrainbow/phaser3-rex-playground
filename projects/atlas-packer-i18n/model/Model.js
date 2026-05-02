import { Structs as PhaserStructs, Events as PhaserEvents } from 'phaser';
import Methods from './Methods.js';

const List = PhaserStructs.List;
const EE = PhaserEvents.EventEmitter;

class Model extends EE {
    constructor(scene) {
        super();

        this.scene = scene;
        this.imageDataList = new List();
    }

    destroy() {
        this.clearImages();
        this.imageDataList = null;

        super.destroy();
    }
}

Object.assign(
    Model.prototype,
    Methods,
)

export default Model;