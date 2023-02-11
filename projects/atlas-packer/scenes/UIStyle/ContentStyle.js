import {
    COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK,

    FONTSIZE_XL, FONTSIZE_L, FONTSIZE_M, FONTSIZE_S,
} from './const.js';

const SettingPanelStyle = {
    space: { left: 10, right: 10, top: 10, bottom: 10, item: 5 },

    inputRow: {
        space: {
            left: 10, right: 10, top: 10, bottom: 10,
            title: 5,
        },

        background: {
            strokeColor: COLOR_LIGHT,
            radius: 10
        },

        title: {
            text: {
                fontSize: FONTSIZE_S
            }
        },

        checkbox: {
            size: 30,
            color: COLOR_LIGHT,
            boxStrokeColor: COLOR_DARK,
            uncheckedColor: COLOR_DARK,
        },

        colorInput: {
            swatch: {
                radius: 10, size: 30
            },

            colorPicker: {
                background: { color: 0x0, strokeColor: COLOR_LIGHT },
            },
        },
    }
}

export default {
    backgroundColor: COLOR_PRIMARY,
    imageBackgroundColor: 0x333333,
    placeHolder: {
        fontSize: FONTSIZE_XL,
    },

    settingPanel: SettingPanelStyle
}