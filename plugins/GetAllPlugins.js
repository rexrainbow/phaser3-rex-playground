import RexUI from 'phaser3-rex-notes/templates/ui/ui-plugin';

var GetAllPlugins = function () {
    return {
        scene: [
            {
                key: 'rexUI',
                plugin: RexUI,
                mapping: 'rexUI'
            },
        ]
    };
}

export default GetAllPlugins;