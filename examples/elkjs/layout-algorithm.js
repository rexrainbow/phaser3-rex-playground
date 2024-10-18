import 'phaser';
import ELK from 'elkjs';

class Game extends Phaser.Scene {
    constructor() {
        super({
            key: 'game'
        })

    }

    preload() {
    }

    create() {
        BuildGraph(this, 0, 0, { 'elk.algorithm': 'layered' });
        BuildGraph(this, 0, 300, { 'elk.algorithm': 'force' });
        BuildGraph(this, 400, 0, { 'elk.algorithm': 'mrtree' });
        BuildGraph(this, 400, 300, { 'elk.algorithm': 'stress' });
    }

    update() { }
}

var BuildGraph = async function (scene, x, y, layoutOptions) {
    var graph = {
        id: 'root',
        layoutOptions: layoutOptions,
        children: [
            { id: 'a', width: 50, height: 50 },
            { id: 'b', width: 50, height: 25 },
            { id: 'c', width: 25, height: 50 },
            { id: 'd', width: 50, height: 50 },
        ],
        edges: [
            { id: 'ab', source: 'a', target: 'b' },
            { id: 'ac', source: 'a', target: 'c' },
            { id: 'bd', source: 'b', target: 'd' },
            { id: 'cd', source: 'c', target: 'd' },
        ],
    };
    var elk = new ELK();
    graph = await elk.layout(graph);
    var graphics = DrawGraph(scene, graph);
    graphics.setPosition(x, y);
}

var DrawGraph = function (scene, graph) {
    var graphics = scene.add.graphics()

    graphics
        .lineStyle(2, 0x888888)
        .strokeRect(0, 0, graph.width, graph.height)

    graph.children.forEach(function (node) {
        graphics
            .lineStyle(4, 0x00FFFF)
            .strokeRectShape(node)
    })

    graph.edges.forEach(function (edge) {
        edge.sections.forEach(function (line) {
            var startPoint = line.startPoint;
            graphics.beginPath()
            graphics.moveTo(startPoint.x, startPoint.y);

            if (line.bendPoints) {
                line.bendPoints.forEach(function (point) {
                    graphics.lineTo(point.x, point.y);
                })
            }

            var endPoint = line.endPoint;
            graphics.lineTo(endPoint.x, endPoint.y);

            graphics.lineStyle(2, 0xFF0000).strokePath()
        })
    })

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