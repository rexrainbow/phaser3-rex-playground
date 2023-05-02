import phaser from 'phaser/src/phaser.js';
import { SCENE_BOOT, SCENE_APP } from './const.js';
import PixelationEffect from '../effects/PixelationEffect.js';
import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import yaml from 'js-yaml';
import TextTranslation from '../../../../phaser3-rex-notes/plugins/texttranslation.js';
import Awaitloader from '../../../../phaser3-rex-notes/plugins/awaitloader.js';
import WebFontLoader from '../../../../phaser3-rex-notes/plugins/webfontloader.js';
import { FONTFAMILY } from './UIStyle/const.js'

class Boot extends Phaser.Scene {
    constructor() {
        super({
            key: SCENE_BOOT
        })

    }

    preload() {
        SetupI18Next(this);
        LoadWebFont(this);

    }

    create() {
        this.scene.transition({
            target: SCENE_APP,
            duration: 500,

            onStart(fromScene, toScene, duration) {
                PixelationEffect(toScene, duration);
            }
        })
    }

    update() { }
}

var SetupI18Next = function (scene) {
    Awaitloader.call(scene.load, function (successCallback, failureCallback) {
        i18next
            .use(Backend)
            .init({
                lng: 'en',  // 'en', 'zh-TW'
                ns: 'ui',
                debug: true,
                backend: {
                    loadPath: 'assets/locales/{{lng}}/{{ns}}.yaml',
                    parse: function (data) { return yaml.load(data) },

                },
            }, successCallback);
    })
    TextTranslation.setI18Next(i18next);
}

var LoadWebFont = function (scene) {
    WebFontLoader.call(scene.load, {
        google: {
            families: [FONTFAMILY]
        }
    });
}

export default Boot;