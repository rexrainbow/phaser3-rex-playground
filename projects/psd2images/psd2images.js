import phaser from 'phaser';
import Tree from '../../../phaser3-rex-notes/plugins/utils/struct/Tree.js';
import Model from './model/Model.js';
import CreateSimpleMainPanel from './gameobjects/builders/CreateSimpleMainPanel.js';
import WebFontLoader from '../../../phaser3-rex-notes/plugins/webfontloader.js';
import {
    COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK,
    FONTSIZE_XL, FONTSIZE_L, FONTSIZE_M, FONTSIZE_S,
    FONTFAMILY,
} from './scenes/UIStyle/const.js';

var Style = {
    backgroundColor: COLOR_PRIMARY,
    placeHolder: {
        fontSize: FONTSIZE_XL,
        fontFamily: FONTFAMILY
    }
}

class TestScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'main'
        })

    }

    preload() {
        WebFontLoader.call(this.load, {
            google: {
                families: [FONTFAMILY]
            }
        });
    }

    create() {
        var configObj = new Tree(Style);
        var model = new Model(this);
        var ui = CreateSimpleMainPanel(this, configObj, model);

        var { width, height } = this.scale;
        ui
            .setMinSize(width, height)
            .setPosition(width / 2, height / 2)
            .layout()

        ui.broadcastEvent('build.complete', ui);
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