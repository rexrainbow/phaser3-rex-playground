const PackAssetFile = require('./PackAssetFile.js');

var PackAssetFolder = function (tree, config) {
    var type = tree.name;
    var totalPackResults = {};

    GetAllFiles(tree).forEach(function (child) {
        var packResult = PackAssetFile(type, child, config, totalPackResults);
        if (packResult) {
            totalPackResults[packResult.key] = packResult;
        }
    })

    return Object.values(totalPackResults);
}

// Get all files belong this root
var GetAllFiles = function (root, out) {
    if (out === undefined) {
        out = [];
    }

    var queue = [root];
    while (queue.length > 0) {
        var current = queue.shift();

        if (current.type === 'file') {
            out.push(current);
        } else {
            queue.push(...current.children);
        }
    }

    return out;
}

module.exports = PackAssetFolder;