import 'phaser';
import dagre from 'dagre';

class Game extends Phaser.Scene {
    constructor() {
        super({
            key: 'game'
        })

    }

    preload() {
    }

    create() {
        BuildGraph(this, 0, 0, { rankdir: 'LR' });
    }

    update() { }
}

var BuildGraph = async function (scene, x, y, graphConfig) {
    var graph = new dagre.graphlib.Graph();
    graph.setGraph(graphConfig);
    graph.setDefaultEdgeLabel(() => ({}));

    graph.setNode('A', { width: 50, height: 50 });
    graph.setNode('B', { width: 50, height: 25 });
    graph.setNode('C', { width: 25, height: 50 });
    graph.setNode('D', { width: 50, height: 50 });
    graph.setEdge('A', 'B');
    graph.setEdge('A', 'C');
    graph.setEdge('B', 'D');
    // graph.setEdge('C', 'D');
    dagre.layout(graph);

    var graphics = DrawGraph(scene, graph);
    graphics.setPosition(x, y);
}

var DrawGraph = function (scene, graph) {
    var graphics = scene.add.graphics()

    var rect = new Phaser.Geom.Rectangle();
    graph.nodes().forEach(function (nodeKey) {
        var node = graph.node(nodeKey);
        rect.setSize(node.width, node.height)
        rect.centerX = node.x;
        rect.centerY = node.y;

        graphics
            .lineStyle(4, 0x00FFFF)
            .strokeRectShape(rect)
    });

    graph.edges().forEach(function (edgeKey) {
        var edge = graph.edge(edgeKey);

        graphics.beginPath().lineStyle(2, 0xFF0000);
        edge.points.forEach(function (point, index) {
            if (index === 0) {
                graphics.moveTo(point.x, point.y);
            } else {
                graphics.lineTo(point.x, point.y);
            }
        })

        graphics.strokePath();
    });

    return graphics;
}

var config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: Game
};

var game = new Phaser.Game(config);