const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;

const FONTSIZE_XL = 36;
const FONTSIZE_L = 30;
const FONTSIZE_M = 24;
const FONTSIZE_S = 20;


var config = {
    holyGrail: {
        space: {
            left: 10, right: 10, top: 10, bottom: 10,
            header: 10, leftSide: 10,
        },

        header: {
            space: { item: 5 },
        },

        leftSide: {
            width: 350,
            space: { item: 5 },

            imageList: {
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
                        icon: 5,
                    },
                    background: {
                        strokeColor: COLOR_LIGHT,
                    },
                    text: {
                        fontSize: FONTSIZE_S,
                    },
                    actionSize: 24,
                }
            },

            imageDataPanel: {
                width: 300, height: 300,
                space: { left: 10, right: 10, top: 10, bottom: 10, item: 5 },

                background: {
                    color: 0x0,
                    strokeColor: COLOR_LIGHT,
                },

                inputRow: {
                    title: {
                        fontSize: FONTSIZE_M,
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
        },

        content: {
            backgroundColor: COLOR_PRIMARY,
            imageBackgroundColor: 0x333333,
            placeHolder: {
                fontSize: FONTSIZE_XL,
            }
        },
    },

    button: {
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
    },

    dialog: {
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
                fontSize: FONTSIZE_L
            }
        },
        content: {
            space: { left: 10, right: 10, top: 10, bottom: 10 },
            text: {
                fontSize: FONTSIZE_M,
            }
        },
        button: {
            space: { left: 10, right: 10, top: 10, bottom: 10 },
            background: {
                radius: 10,
                color: COLOR_PRIMARY,
                strokeColor: COLOR_LIGHT
            },
            text: {
                fontSize: FONTSIZE_M,
            }
        },
    }
}

export default config;