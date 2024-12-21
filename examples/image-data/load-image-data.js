import * as Phaser from 'phaser';
import { decode } from 'cbor2'

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() {
        var key = 'classroom';
        this.load.binary(key, 'assets/classroom.cbor', Uint8Array);
        this.load.once(`filecomplete-binary-${key}`, function () {
            var buffer = this.cache.binary.get(key);
            var { width, height, data } = decode(buffer);

            var texture = this.textures.createCanvas(key, width, height);
            var context = texture.getContext();
            var imageData = new ImageData(new Uint8ClampedArray(data), width, height);
            context.putImageData(imageData, 0, 0);
            texture.refresh();
        }, this);
    }

    create() {
        this.add.image(400, 300, 'classroom');
    }

    update() { }
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: Demo
};

var game = new Phaser.Game(config);