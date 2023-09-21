import {
    COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK,
    FONTSIZE_XL, FONTSIZE_L, FONTSIZE_M, FONTSIZE_S, FONTSIZE_XS,
    FONTFAMILY,
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
                fontSize: FONTSIZE_S,
                fontFamily: FONTFAMILY,
            }
        },

        inputText: {
            width: 50,
            background: {
                color: COLOR_DARK
            },
            focusStyle: {
                color: COLOR_PRIMARY,
            },
            style: {
                fontSize: FONTSIZE_S,
                fontFamily: FONTFAMILY,
                backgroundBottomY: 4,
                backgroundHeight: 18,
            },
            cursorStyle: {
                color: 'black',
                backgroundColor: 'white',
            }
        },

        checkbox: {
            size: 20,
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

const StatusPanelStyle = {
    space: { left: 10, right: 10, },
    text: {
        fontSize: FONTSIZE_S,
        fontFamily: FONTFAMILY,
        // backgroundColor: COLOR_DARK,
        fixedWidth: 200,
    }
}

export default {
    backgroundColor: COLOR_PRIMARY,
    imageBackgroundColor: 0x333333,
    placeHolder: {
        fontSize: FONTSIZE_XL,
        fontFamily: FONTFAMILY
    },

    settingPanel: SettingPanelStyle,

    statusPanel: StatusPanelStyle,
}