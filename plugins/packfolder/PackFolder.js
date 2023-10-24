const FolderToJSON = require('./foldertojson/FolderToJSON.js');
const fs = require('fs');
const path = require('path');

var PackFolder = function (root, outFile, config) {
    if (outFile === undefined) {
        outFile = path.join(root, 'pack.json');
    }

    var result = FolderToJSON(root, config);

    var content = JSON.stringify(result, undefined, 2);

    if (path.extname(outFile) === '.js') {
        content = `const PackData = ${content}
export default PackData;`;
    }

    if (outFile) {
        try {
            fs.writeFileSync(outFile, content);
        } catch (err) {
            console.error(err)
        }
    } else {
        console.log(content);
    }

}

module.exports = PackFolder;