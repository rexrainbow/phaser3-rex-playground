
const DistanceBetween = Phaser.Math.Distance.Between;


var OnDropTile = function (droppedTile, tiles, easeDuration) {
    var minDistance = Infinity;
    var swapTargetTile;
    var tileSize = Math.min(droppedTile.displayWidth, droppedTile.displayHeight);

    for (var i = 0, cnt = tiles.length; i < cnt; i++) {
        var tile = tiles[i];
        if (tile === droppedTile) {
            continue;
        }
        var d = DistanceBetween(droppedTile.x, droppedTile.y, tile.x, tile.y);
        if ((d < minDistance) && (d < tileSize)) {
            minDistance = d;
            swapTargetTile = tile;
        }
    }

    if (swapTargetTile && swapTargetTile.isSwappable) {
        // Swap with target tile
        var dropTilePosition = droppedTile.currentPosition;
        var swapedTileToX = dropTilePosition.x;
        var swapedTileToY = dropTilePosition.y;

        var swappedTilePosition = swapTargetTile.currentPosition;
        var droppedTileToX = swappedTilePosition.x;
        var droppedTileToY = swappedTilePosition.y;


        droppedTile
            .setCurrentPosition(droppedTileToX, droppedTileToY)
            .moveTo(easeDuration, droppedTileToX, droppedTileToY)

        swapTargetTile
            .setCurrentPosition(swapedTileToX, swapedTileToY)
            .moveTo(easeDuration, swapedTileToX, swapedTileToY)

    } else {
        // Move droppedTile back
        var dropTilePosition = droppedTile.currentPosition;
        var droppedTileToX = dropTilePosition.x;
        var droppedTileToY = dropTilePosition.y;
        droppedTile.moveTo(easeDuration, droppedTileToX, droppedTileToY);
    }
}

export default OnDropTile;