import ChildrenMethods from './ChildrenMethods.js';
import Layout from './Layout.js';
import FitTo from './FitTo.js';
import DrawImagesBounds from './DrawImagesBounds.js';

var Methods = {
    layout: Layout,
    fitTo: FitTo,
    drawImagesBounds: DrawImagesBounds,
}

Object.assign(
    Methods,
    ChildrenMethods,
)

export default Methods;