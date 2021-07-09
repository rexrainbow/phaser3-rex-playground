import * as Phaser from 'phaser';
import { OverlapSizer } from 'phaser3-rex-plugins/templates/ui/ui-components.js';

class MyOverlapSizer extends OverlapSizer { }

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() { }

    create() {
        var sizer = new MyOverlapSizer(this, 400, 300, 300, 300, { space: 10 })
        this.add.existing(sizer);

        sizer
            .add(this.add.text(0, 0, 'aabb'), { align: 'right-bottom', expand: false })
            .layout()
            .drawBounds(this.add.graphics(), 0xff0000)
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