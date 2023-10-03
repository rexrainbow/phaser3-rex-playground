const dirTree = require("directory-tree");
const LoaderTypes = require('./LoaderTypes.js');
const PackSubFolders = require('./PackSubFolders.js');

const DefaultConfig = {
    relatedPathFrom: '',
    configYamlExtension: '.cfg',
    customLoaderTypes: []
}
var FolderToJSON = function (root, config) {
    if (config === undefined) {
        config = {};
    }

    config = { ...DefaultConfig, ...config };
    LoaderTypes.push(...config.customLoaderTypes);

    var tree = dirTree(root, { attributes: ['type'] });
    var result = PackSubFolders(tree, config);
    if (result.files) {
        result = { packKey: result };
    }

    return result;
}

module.exports = FolderToJSON;