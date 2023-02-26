import ChildrenMethods from './ChildrenMethods.js';
import Layout from './Layout.js';
import FitTo from './FitTo.js';
import DrawImagesBounds from './DrawImagesBounds.js';
import DrawImageMarker from './DrawImageMarker.js';

var Methods = {
    layout: Layout,
    fitTo: FitTo,
    drawImagesBounds: DrawImagesBounds,
    drawImageMarker: DrawImageMarker,
}

Object.assign(
    Methods,
    ChildrenMethods,
)

export default Methods;