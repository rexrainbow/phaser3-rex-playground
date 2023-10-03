const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');

var PackAssetFile = function (type, child, config, totalPackResults) {
    var key = GetKey(child.name);
    var packResult = totalPackResults[key];
    if (!packResult) {
        packResult = { type: type, key: key };
    }

    var extName = GetExtend(child.name);
    if (extName === config.configYamlExtension) {
        // Is a pack config file
        var packConfig = GetYamlObject(child.path);
        for (var k in packConfig) {
            packResult[k] = packConfig[k];
        }
    } else {
        var url = GetURL(child.path, config.relatedPathFrom);
        switch (type) {
            case 'audio':
                if (!packResult.url) {
                    packResult.url = [];
                }
                packResult.url.push(url);
                break;

            case 'atlas':
                if (extName === '.json') {
                    packResult.atlasURL = url;
                } else {
                    packResult.textureURL = url;
                }
                break;

            case 'bitmapFont':
                if (extName === '.xml') {
                    packResult.fontDataURL = url;
                } else {
                    packResult.textureURL = url;
                }
                break;

            default:
                // image,text,json,animation,xml,svg,html,spritesheet
                // css,sceneFile,script,glsl,tilemapTiledJSON,tilemapCSV
                packResult.url = url;
                break;
        }
    }

    return packResult;
}

var GetKey = function (name) {
    return path.parse(name).name;
}

var GetExtend = function (name) {
    return path.extname(name);
}

var GetURL = function (filePath, relatedPathFrom) {
    if (relatedPathFrom !== '') {
        filePath = filePath.replace(relatedPathFrom, '');
    }
    return filePath.replace(/\\/gi, '/').replace(/^(\/)/, '');
}

var GetYamlObject = function (filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    return yaml.load(content);
}


module.exports = PackAssetFile;