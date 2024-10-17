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
        const elk = new ELK();

        const graph = {
            id: 'root',
            layoutOptions: {
                'elk.algorithm': 'layered',
            },
            children: [
                { id: 'a', width: 100, height: 100 },
                { id: 'b', width: 100, height: 100 },
                { id: 'c', width: 100, height: 100 },
            ],
            edges: [
                { id: 'ab', source: 'a', target: 'b' },
                { id: 'ac', source: 'a', target: 'c' },
            ],
        };

        var scene = this;
        elk.layout(graph).then((result) => {
            console.log(result);
            console.log(graph === result);
            DrawGraph(scene, result);
        });

    }

    update() { }
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
            console.log('start', startPoint)

            if (line.bendPoints) {
                line.bendPoints.forEach(function (point) {
                    graphics.lineTo(point.x, point.y);
                    console.log('bend', point)
                })
            }

            var endPoint = line.endPoint;
            graphics.lineTo(endPoint.x, endPoint.y);
            console.log('end', endPoint)

            graphics.lineStyle(2, 0xFF0000).strokePath()
        })
    })
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