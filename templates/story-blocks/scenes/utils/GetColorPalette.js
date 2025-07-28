import { DATA_KEY_CONFIGURATION } from '../DataKeys.js';

class ColorPalette {
    constructor(data) {
        this.setData(data);
    }

    setData(data) {
        this.data = data;
        return this;
    }

    get PANEL_BG() {
        return this.data.COLOR_800
    }

    get PANEL_BOARD() {
        return this.data.COLOR_700;
    }

    get BUTTON_BG() {
        return this.data.COLOR_700;
    }

    get BUTTON_BOARD() {
        return this.data.COLOR_600;
    }

    get BUTTON_HOVER_BOARD() {
        return this.data.COLOR_500;
    }

    get BUTTON_TEXT() {
        return this.data.COLOR_100;
    }

    get TITLE() {
        return this.data.COLOR_200;
    }

    get CONTENT() {
        return this.data.COLOR_300;
    }

    get THUMB() {
        return this.data.COLOR_400;
    }

    get TRACK() {
        return this.data.COLOR_100;
    }
}

var colorPalette = new ColorPalette();

var GetColorPalette = function (scene) {
    var configuration = scene.registry.get(DATA_KEY_CONFIGURATION);
    return colorPalette.setData(configuration.ColorPalette);
}

export default GetColorPalette;