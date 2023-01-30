const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;

var config = {
    leftSide: {
        width: 300,

        imageList: {
            table: {
                cellHeight: 80
            },

            slider: {
                track: { width: 20, radius: 10, color: COLOR_DARK },
                thumb: { radius: 13, color: COLOR_LIGHT }
            },

            label: {
                background: {
                    strokeColor: COLOR_LIGHT,
                },
                space: {
                    left: 5, right: 5, top: 5, bottom: 5,
                    icon: 5,
                }
            }
        }
    },

    content: {
        backgroundColor: COLOR_PRIMARY,
        imageBackgroundColor: 0x555555
    },
}

export default config;