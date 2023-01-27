import { Tweaker } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';

const COLOR_PRIMARY = 0x424242;
const COLOR_LIGHT = 0x6d6d6d;
const COLOR_DARK = 0x1b1b1b;

class ConfigurationPanel extends Tweaker {
    constructor(mainPanel, config) {
        var scene = mainPanel.scene;

        super(scene, {
            orientation: 0,
            height: 40,

            styles: {
                space: { left: 10, right: 10, top: 10, bottom: 10 },

                inputRow: {
                    background: {
                        strokeColor: COLOR_PRIMARY
                    },

                    title: {
                        space: { left: 5, right: 5 }
                    },

                    checkbox: {
                        size: 30,
                        color: COLOR_LIGHT,
                        boxStrokeColor: COLOR_DARK,
                        uncheckedColor: COLOR_DARK,
                    },

                    colorInput: {
                        swatchSize: 30,

                        inputText: false,

                        colorPicker: {
                            background: { color: 0x0, strokeColor: COLOR_LIGHT },
                        },

                        colorComponents: false
                    },

                    proportion: {
                        title: 0,
                        inputField: 0,
                        range: { slider: 0, inputText: 0 }
                    }
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