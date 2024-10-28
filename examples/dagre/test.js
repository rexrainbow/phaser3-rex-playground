import dagre from 'dagre';

const g = new dagre.graphlib.Graph();
g.setGraph({});
g.setDefaultEdgeLabel(() => ({}));

g.setNode('A', { width: 50, height: 30 });
g.setNode('B', { width: 40, height: 40 });
g.setEdge('A', 'B');

dagre.layout(g);

console.log(g)

g.nodes().forEach(v => {
    console.log(g.node(v));
});

g.edges().forEach(v => {
    console.log(g.edge(v));
});