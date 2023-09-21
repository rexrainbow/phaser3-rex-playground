import {
    COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK,
    FONTSIZE_XL, FONTSIZE_L, FONTSIZE_M, FONTSIZE_S, FONTSIZE_XS,
    FONTFAMILY,
} from './const.js';


export default {
    space: {
        left: 30, right: 30, top: 30, bottom: 30,
        title: 25, content: 30,
    },
    background: {
        radius: 20,
        color: COLOR_DARK,
        strokeColor: COLOR_LIGHT
    },
    title: {
        space: { left: 10, right: 10, top: 10, bottom: 10 },
        background: {
            color: COLOR_PRIMARY
        },
        text: {
            fontSize: FONTSIZE_L,
            fontFamily: FONTFAMILY,
        }
    },
    content: {
        space: { left: 10, right: 10, top: 10, bottom: 10 },
        text: {
            $type: 'bbcode',
            fontSize: FONTSIZE_M,
            fontFamily: FONTFAMILY,
            underline: {
                color: 'blue',
                thickness: 4,
                offset: 1
            },
            interactive: true
        }
    },
    button: {
        space: { left: 10, right: 10, top: 10, bottom: 10 },
        background: {
            radius: 10,
            color: COLOR_PRIMARY,
            strokeColor: COLOR_LIGHT,

            'hover.strokeColor': 0xffffff,
        },
        text: {
            fontSize: FONTSIZE_M,
            fontFamily: FONTFAMILY,
        }
    },
}