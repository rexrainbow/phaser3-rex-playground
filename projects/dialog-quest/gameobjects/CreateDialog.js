const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;

var CreateDialog = function (scene) {
    return scene.rexUI.add.dialog({
        x: scene.cameras.main.width / 2,
        y: scene.cameras.main.height / 2,
        width: 360,

        background: scene.rexUI.add.roundRectangle(0, 0, 100, 100, 20, COLOR_PRIMARY),

        title: CreateTitle(scene, ' ', COLOR_DARK),

        content: scene.add.text(0, 0, ' ', {
            fontSize: '24px'
        }),

        choices: [
            CreateButton(scene, ' ', COLOR_LIGHT),
            CreateButton(scene, ' ', COLOR_LIGHT),
            CreateButton(scene, ' ', COLOR_LIGHT),
            CreateButton(scene, ' ', COLOR_LIGHT),
            CreateButton(scene, ' ', COLOR_LIGHT)
        ], // Support 5 choices

        actions: [
            CreateButton(scene, 'Next', COLOR_DARK),
        ],

        space: {
            title: 25,
            content: 25,
            choices: 20,
            choice: 15,
            action: 15,

            left: 25,
            right: 25,
            top: 25,
            bottom: 25,
        },

        expand: {
            content: false,  // Content is a pure text object
        }
    });
}

var CreateTitle = function (scene, text, backgroundColor) {
    return scene.rexUI.add.label({
        background: scene.rexUI.add.roundRectangle(0, 0, 100, 40, 20, backgroundColor),
        text: scene.add.text(0, 0, text, {
            fontSize: '24px'
        }),
        space: {
            left: 15,
            right: 15,
            top: 10,
            bottom: 10
        }
    });
};

var CreateContent = function(scene, text, backgroundColor) {
    return scene.rexUI.add.label({
        background: scene.rexUI.add.roundRectangle(0, 0, 100, 40, 20, backgroundColor),
        text: scene.add.text(0, 0, text, {
            fontSize: '24px'
        }),
        space: {
            left: 15,
            right: 15,
            top: 10,
            bottom: 10
        }
    });
}

var CreateButton = function (scene, text, backgroundColor) {
    return scene.rexUI.add.label({
        background: scene.rexUI.add.roundRectangle(0, 0, 100, 40, 20, backgroundColor),

        text: scene.add.text(0, 0, text, {
            fontSize: '24px'
        }),

        space: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10
        }
    });
}

export default CreateDialog;