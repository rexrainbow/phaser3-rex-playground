import HeaderStyle from './HeaderStyle.js';
import LeftSideStyle from './LeftSideStyle.js';
import ContentStyle from './ContentStyle.js';
import DialogStyle from './DialogStyle.js';

var style = {
    holyGrail: {
        space: {
            left: 10, right: 10, top: 10, bottom: 10,
            header: 10, leftSide: 10,
        },

        header: HeaderStyle,

        leftSide: LeftSideStyle,

        content: ContentStyle,
    },

    dialog: DialogStyle
}

export default style;