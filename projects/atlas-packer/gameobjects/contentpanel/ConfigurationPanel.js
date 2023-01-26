import { Tweaker } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';

const COLOR_PRIMARY = 0x424242;
const COLOR_LIGHT = 0x6d6d6d;
const COLOR_DARK = 0x1b1b1b;

class ConfigurationPanel extends Tweaker {
    constructor(mainPanel, config) {
        var scene = mainPanel.scene;

        super(scene, {
            orientation: 0,
            height: 30,

            styles: {
                itemWidth: 200,

                //background: {
                //    strokeColor: COLOR_PRIMARY
                //},

                //title: {
                //    space: { left: 5 }
                //},

                checkbox: {
                    color: COLOR_LIGHT,
                    boxStrokeColor: COLOR_DARK,
                    uncheckedColor: COLOR_DARK,
                },

                colorInput: {
                    colorPicker: {
                        background: { color: 0x0, strokeColor: COLOR_LIGHT },
                    },

                    colorComponents: {
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
                        }
                    }
                },

                proportion: {
                    title: 1,
                    inputField: 1,
                    range: { slider: 3, inputText: 2 }
                }
            }
        });

        this
            .addInput(
                mainPanel, 'backgroundColor',
                {
                    title: 'Color',
                    view: 'color',
                }
            )
            .addInput(
                mainPanel, 'outlineEnable',
                {
                    title: 'Outline',
                    // view: 'toggleSwitch'        // Toggle-switch
                }
            )
    }
}

export default ConfigurationPanel;