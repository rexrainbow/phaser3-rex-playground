import Shuffle from '../../../../phaser3-rex-notes/plugins/utils/array/Shuffle.js';

var ShuffleTiles = function (tiles, easeDuration) {
    var tilePositionList = [];
    for (var i = 0, cnt = tiles.length; i < cnt; i++) {
        var tile = tiles[i];
        tilePositionList.push({ x: tile.x, y: tile.y });
    }

    Shuffle(tiles);

    for (var i = 0, cnt = tiles.length; i < cnt; i++) {
        var tile = tiles[i];
        var tilePosition = tilePositionList[i];

        tile
            .moveTo(easeDuration, tilePosition.x, tilePosition.y)
            .setCurrentPosition(tilePosition.x, tilePosition.y)
    }
}

export default ShuffleTiles;