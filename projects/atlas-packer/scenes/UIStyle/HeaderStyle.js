import {
    COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK,
    FONTSIZE_XL, FONTSIZE_L, FONTSIZE_M, FONTSIZE_S,
    FONTFAMILY,
} from './const.js';

const ButtonStyle = {
    space: { left: 10, right: 10, top: 10, bottom: 10, icon: 5 },
    width: 140,
    align: 'center',

    background: {
        radius: 10,
        color: null,
        strokeColor: COLOR_LIGHT,

        'hover.color': COLOR_PRIMARY,
    },
    iconSize: FONTSIZE_M,
    text: {
        fontSize: FONTSIZE_M,
        fontFamily: FONTFAMILY
    }
}

export default {
    space: { item: 5 },

    button: ButtonStyle,
}