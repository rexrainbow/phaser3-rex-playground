var GetScore = function (tiles) {
    var correctTileCount = 0;
    for (var i = 0, cnt = tiles.length; i < cnt; i++) {
        if (tiles[i].isHitTargetPosition) {
            correctTileCount += 1;
        }
    }

    var score = Math.floor(correctTileCount * 100 / tiles.length);
    return score;
}

export default GetScore;