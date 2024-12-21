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
        LoadZipFile(scene, 'assets/classroom.zip', async function (zip) {
            var cborData = await zip.file(key).async('arraybuffer');
            await LoadImageFromCBORBuffer(scene, key, cborData);
        })


    }

    create() {
        this.add.image(400, 300, 'classroom');
    }

    update() { }
}

var LoadZipFile = function (scene, url, callback) {
    var key = Phaser.Utils.String.UUID()
    scene.load.rexAwait(function (successCallback, failureCallback) {
        scene.load.binary(key, url, Uint8Array);
        scene.load.once(`filecomplete-binary-${key}`, async function () {
            var zip = await JSZip.loadAsync(scene.cache.binary.get(key));
            await callback(zip);
            successCallback()
            scene.cache.binary.remove(key)
        });
    })
}

var LoadImageFromCBORBuffer = async function (scene, key, buffer) {
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