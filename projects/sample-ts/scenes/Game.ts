import 'phaser'
import RexUI from 'phaser3-rex-plugins/templates/ui/ui-plugin';

class Game extends Phaser.Scene {
    rexUI: RexUI;

    constructor() {
        super({
            key: 'game'
        })

    }

    preload() {
        this.load.image('classroom', 'assets/classroom.png');

        this.load.image('uiBg0', 'assets/nine-patch.png');
        this.load.json('uiBg0', 'assets/nine-patch.json');
    }

    create() {
        console.log('Game');

        // Example of creating sprite/image
        this.add.image(400, 300, 'classroom');

        // Example of creating ui component
        this.rexUI.add.label({
            anchor: { x: 'left', y: 'center' },
            orientation: 'x',

            background: Create3x3NinePatch(this, 'uiBg0', this.cache.json.get('uiBg0')),
            icon: this.rexUI.add.roundRectangle(0, 0, 40, 40, 10, 0x7b5e57),
            text: this.add.text(0, 0, 'Label', {
                color: 'black',
            }),
            space: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10,

                icon: 10,
            },
        })
            .setOrigin(0, 0.5)
            .layout();
    }

    update() { }
}

var Create3x3NinePatch = function (scene, key, config) {
    return scene.rexUI.add.ninePatch({
        key: key,
        columns: [config.left, undefined, config.right],
        rows: [config.top, undefined, config.bottom]
    });
}

export default Game;