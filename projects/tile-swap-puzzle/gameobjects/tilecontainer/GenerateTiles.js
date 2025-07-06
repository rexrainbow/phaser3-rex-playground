import CreatePieces from '../../../../../phaser3-rex-notes/plugins/actions/cutjigsawimage/CreatePieces.js';
import Tile from '../tile/Tile.js';

var GenerateTiles = function (targetImage, piecePool) {
    if (piecePool) {
        for (var i = 0, cnt = piecePool.length; i < cnt; i++) {
            piecePool[i].setVisible(false);
        }
    }

    var columns = Math.ceil(targetImage.width / 256);
    var rows = Math.ceil(targetImage.height / 256);
    var pieces = CreatePieces(targetImage, {
        piecesKey: 'pieces',
        columns: columns, rows: rows,
        edgeWidth: 0, edgeHeight: 0,
        useDynamicTexture: false,

        ImageClass: Tile,
        objectPool: piecePool
    })

    for (var i = 0, cnt = pieces.length; i < cnt; i++) {
        pieces[i].setVisible(true);
    }

    return pieces;
}

export default GenerateTiles;