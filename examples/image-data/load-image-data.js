import * as Phaser from 'phaser';
import JSZip from 'jszip';
import { decode } from 'cbor2';
import AwaitLoaderPlugin from '../../../phaser3-rex-notes/plugins/awaitloader-plugin.js';

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() {
        var scene = this;

        var key = 'classroom';
        scene.load.rexAwait(function (successCallback, failureCallback) {
            scene.load.binary(key, 'assets/classroom.zip', Uint8Array);
            scene.load.once(`filecomplete-binary-${key}`, async function () {
                var buffer = scene.cache.binary.get(key);

                var zip = await JSZip.loadAsync(buffer);
                var cborData = await zip.file(key).async('arraybuffer');
                LoadImageFromCBORBuffer(scene, key, cborData);
                successCallback()
            });
        })


    }

    create() {
        this.add.image(400, 300, 'classroom');
    }

    update() { }
}

var LoadImageFromCBORBuffer = function (scene, key, buffer) {
    var { width, height, data } = decode(new Uint8Array(buffer));

    var texture = scene.textures.createCanvas(key, width, height);
    var context = texture.getContext();
    var imageData = new ImageData(new Uint8ClampedArray(data), width, height);
    context.putImageData(imageData, 0, 0);
    texture.refresh();
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
    scene: Demo,
    plugins: {
        global: [{
            key: 'rexAwaitLoader',
            plugin: AwaitLoaderPlugin,
            start: true
        }]
    }
};

var game = new Phaser.Game(config);