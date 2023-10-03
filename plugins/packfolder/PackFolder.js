const FolderToJSON = require('./foldertojson/FolderToJSON.js');
const fs = require('fs');
const path = require('path');

var PackFolder = function (root, outFile, config) {
    if (outFile === undefined) {
        outFile = 'pack.json';
    }

    var result = FolderToJSON(root, config);

    var content = JSON.stringify(result, undefined, 2);

    if (path.extname(outFile) === '.js') {
        content = `const PackData = ${content}
export default PackData;`;
    }

    try {
        fs.writeFileSync(outFile, content);
    } catch (err) {
        console.error(err)
    }

}

module.exports = PackFolder;