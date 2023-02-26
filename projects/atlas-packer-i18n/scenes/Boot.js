import phaser from '../lib/phaser.js';
import { SCENE_BOOT, SCENE_APP } from './const.js';
import PixelationEffect from '../effects/PixelationEffect.js';
import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import TextTranslation from '../../../../phaser3-rex-notes/plugins/texttranslation.js';

class Boot extends Phaser.Scene {
    constructor() {
        super({
            key: SCENE_BOOT
        })

    }

    preload() {
        i18next
            .use(Backend)
            .init(
                {
                    lng: 'zh-tw',
                    ns: 'ui',
                    debug: true,
                    backend: {
                        loadPath: '/assets/locales/{{lng}}/{{ns}}.json'
                    },
                },
            );

        TextTranslation.setI18Next(i18next);
    }

    create() {
        var nextScene = this.scene.get(SCENE_APP);
        nextScene.events.once('transitionstart', function (fromScene, duration) {
            PixelationEffect(nextScene, duration);
        });

        this.scene.transition({
            target: SCENE_APP,
            duration: 500
        })
    }

    update() { }
}

export default Boot;