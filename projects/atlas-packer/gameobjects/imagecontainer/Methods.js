import ChildrenMethods from './ChildrenMethods.js';
import Layout from './Layout.js';
import FitTo from './FitTo.js';

var Methods = {
    layout: Layout,
    fitTo: FitTo,
}

Object.assign(
    Methods,
    ChildrenMethods,
)

export default Methods;