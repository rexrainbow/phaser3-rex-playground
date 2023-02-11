import {
    COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK,

    FONTSIZE_XL, FONTSIZE_L, FONTSIZE_M, FONTSIZE_S,
} from './const.js';

const ButtonStyle = {
    space: { left: 10, right: 10, top: 10, bottom: 10, icon: 5 },
    width: 140,
    align: 'center',

    background: {
        radius: 10,
        strokeColor: COLOR_LIGHT
    },
    iconSize: FONTSIZE_M,
    text: {
        fontSize: FONTSIZE_M,
    }
}

export default {
    space: { item: 5 },

    button: ButtonStyle,
}