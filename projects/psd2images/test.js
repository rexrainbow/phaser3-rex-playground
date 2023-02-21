import phaser from 'phaser';
import { FileDropZone } from '../../../phaser3-rex-notes/templates/ui/ui-components.js';
import PSD from './lib/psd-standalone.js';

class TestScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'test'
        })

    }

    preload() {

    }

    create() {
        var psdDropZone = new FileDropZone(this, {
            filters: {
                psd: function (file) { return file.name.match(/\.psd/i) }
            },

            x: 400, y: 300,
            width: 300, height: 300,
            style: {
                'background-color': 'brown'
            }
        })
        this.add.existing(psdDropZone);

        psdDropZone
            .on('drop.psd', function (files) {
                if (files.length === 0) {
                    return;
                }

                var file = files[0];
                var url = URL.createObjectURL(file);
                PSD.fromURL(url).then(function (psd) {
                    URL.revokeObjectURL(url);

                    psd.parse();
                    console.log(psd.tree().export());

                    psd.tree().descendants().forEach(function (node) {
                        if (node.isGroup()) {
                            return true;
                        }
                        console.log(node.name);
                    });
                })
            })
    }

    update() { }
}

var config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    dom: {
        createContainer: true
    },
    plugins: {},
    scene: [TestScene],
};

var game = new Phaser.Game(config);