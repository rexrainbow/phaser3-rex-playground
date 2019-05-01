class Game extends Phaser.Scene {
    constructor() {
        super({
            key: 'game'
        })

    }

    preload() {
        this.load.image('classroom', 'assets/classroom.png');
    }

    create() {
        console.log('Game');

        // Example of creating sprite/image
        this.add.image(400, 300, 'classroom');

        // Example of creating ui component
        this.rexUI.add.label({
            x: 'left',
            y: 'center',
            orientation: 'x',

            background: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, 0x4e342e),
            icon: this.rexUI.add.roundRectangle(0, 0, 40, 40, 10, 0x7b5e57),
            text: this.add.text(0, 0, 'Label'),
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
export default Game;