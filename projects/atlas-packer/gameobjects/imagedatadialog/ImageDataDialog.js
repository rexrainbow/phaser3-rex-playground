import { Tweaker } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';

const COLOR_PRIMARY = 0x424242;
const COLOR_LIGHT = 0x6d6d6d;
const COLOR_DARK = 0x1b1b1b;


class ImageDataDialog extends Tweaker {
    constructor(scene, config) {
        super(scene, {
            ...config,

            styles: {
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
        });

        this
            .addInput(
                {
                    bindingKey: 'x',
                    inputTextReadOnly: true  // Uneditable
                }
            )
            .addInput(
                {
                    bindingKey: 'y',
                    inputTextReadOnly: true  // Uneditable
                }
            )
            .addInput(
                {
                    bindingKey: 'width',
                    title: 'w',
                    inputTextReadOnly: true  // Uneditable
                }
            )
            .addInput(
                {
                    bindingKey: 'height',
                    title: 'h',
                    inputTextReadOnly: true  // Uneditable
                }
            )

    }
}

export default ImageDataDialog;