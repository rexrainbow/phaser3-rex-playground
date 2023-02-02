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
        },
    },

    content: {
        backgroundColor: COLOR_PRIMARY,
        imageBackgroundColor: 0x555555,
    },

    imageDataDialog: {
        width: 300, height: 300,
        space: { left: 5, right: 5, top: 5, bottom: 5, item: 5 },

        background: {
            color: 0x0,
            strokeColor: COLOR_LIGHT,
        },

        inputRow: {
            title: {
            },

            inputText: {
                background: {
                    color: COLOR_DARK
                },
                focusStyle: {
                    color: COLOR_PRIMARY,
                },
                style: {
                    backgroundBottomY: 4,
                    backgroundHeight: 18,
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
}

export default config;