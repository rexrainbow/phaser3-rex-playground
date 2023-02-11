import {
    COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK,

    FONTSIZE_XL, FONTSIZE_L, FONTSIZE_M, FONTSIZE_S,
} from './const.js';

const ImageListStyle = {
    table: {
        cellHeight: 80
    },

    slider: {
        track: { width: 20, radius: 10, color: COLOR_DARK },
        thumb: { radius: 13, color: COLOR_LIGHT }
    },

    label: {
        space: {
            left: 5, right: 5, top: 5, bottom: 5,
            icon: 5, text: 5,
        },
        background: {
            strokeColor: COLOR_LIGHT,
        },
        text: {
            fontSize: FONTSIZE_S,
        },
        actionSize: 24,
    }
}

const ImageDataPanelStyle = {
    width: 300, height: 340,
    space: { left: 10, right: 10, top: 10, bottom: 10, item: 10 },

    background: {
        color: 0x0,
        strokeColor: COLOR_LIGHT,
    },

    inputRow: {
        title: {
            text: {
                fontSize: FONTSIZE_S,
            }
        },

        inputText: {
            background: {
                color: COLOR_DARK
            },
            focusStyle: {
                color: COLOR_PRIMARY,
            },
            style: {
                fontSize: FONTSIZE_S,
                backgroundBottomY: 4,
                backgroundHeight: 20,
            },
            cursorStyle: {
                color: 'black',
                backgroundColor: 'white',
            }
        },

        space: { item: 5 }
    },

    separator: {
        height: 5,
        color: COLOR_DARK
    },
}

export default {
    width: 350,
    space: { item: 5 },

    imageList: ImageListStyle,

    imageDataPanel: ImageDataPanelStyle
}