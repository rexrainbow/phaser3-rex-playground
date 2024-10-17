import ELK from 'elkjs';

const elk = new ELK();

const graph = {
    id: 'root',
    layoutOptions: {
        'elk.algorithm': 'layered',
    },
    children: [
        { id: 'a', width: 30, height: 30 },
        { id: 'b', width: 30, height: 30 },
        { id: 'c', width: 30, height: 30 },
    ],
    edges: [
        { id: 'ab', source: 'a', target: 'b' },
        { id: 'ac', source: 'a', target: 'c' },
    ],
};

elk.layout(graph).then((result) => {
    console.log(result);
    console.log(graph === result);
});
