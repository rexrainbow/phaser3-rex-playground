import 'phaser';
import ImageBoard from './gameobjects/imageboard/imageboard';

class TestScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'test'
        })

    }

    preload() {
        this.load.image('A-anger', 'assets/characters/A-anger.png');
        this.load.image('A-confuse', 'assets/characters/A-confuse.png');
        this.load.image('A-dizzy', 'assets/characters/A-dizzy.png');
        this.load.image('A-happy', 'assets/characters/A-happy.png');
        this.load.image('A-none', 'assets/characters/A-none.png');
        this.load.image('A-shock', 'assets/characters/A-shock.png');
        this.load.image('A-smile', 'assets/characters/A-smile.png');
    }

    create() {
        var board = new ImageBoard(this, 400, 300);
        this.add.existing(board);

        board
            .add(this.add.image(0, 0, 'A-anger'))
            .add(this.add.image(0, 0, 'A-confuse'))
            .add(this.add.image(0, 0, 'A-dizzy'))
            .add(this.add.image(0, 0, 'A-happy'))
            .add(this.add.image(0, 0, 'A-none'))
            .add(this.add.image(0, 0, 'A-shock'))
            .add(this.add.image(0, 0, 'A-smile'))
            .layout()
            .fitTo({ width: 800 - 10, height: 600 - 10 })
            .drawBounds(this.add.graphics())
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
    plugins: {},
    scene: [TestScene],
};

var game = new Phaser.Game(config);