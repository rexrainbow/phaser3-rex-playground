import IsImageFile from '../utils/IsImageFile.js';
import IsJSONFile from '../utils/IsJSONFile.js';
import FileObjectToCache from '../../../../phaser3-rex-notes/plugins/utils/loader/FileObjectToCache.js';
import CreateImageData from './CreateImageData.js';

const UUID = Phaser.Utils.String.UUID;

var AddAtlasFiles = function (files) {
    var self = this;

    var jsonFile, imageFile;
    for (var i = 0; i < 2; i++) {
        var file = files[i];
        if (IsJSONFile(file)) {
            jsonFile = file;
        } else if (IsImageFile(file)) {
            imageFile = file;
        }
    }

    if (!jsonFile || !imageFile) {
        return this;
    }

    var key = UUID();
    FileObjectToCachePromise(this.scene, imageFile, jsonFile, key)
        .then(function () {
            var frames = self.scene.game.textures.get(key).frames;
            var newImageDataArray = [];
            for (var frameName in frames) {
                if (frameName === '__BASE') {
                    continue;
                } else if (self.hasImage(frameName)) {
                    continue;
                }

                var imageData = CreateImageData();
                imageData.name = frameName;
                imageData.key = key;
                imageData.frame = frameName;

                self.imageDataList.add(imageData);
                newImageDataArray.push(imageData);
            }

            self.emit('addimages', newImageDataArray, self.imageDataList.list);
            self.emit('postupdateimages');
        })

    return this;
}


var FileObjectToCachePromise = function (scene, imageFile, jsonFile, key) {
    var loadCallback = function () {
        var textureURL = window.URL.createObjectURL(imageFile);
        var atlasURL = window.URL.createObjectURL(jsonFile);
        scene.load.atlas(key, textureURL, atlasURL);
    }

    return new Promise(function (resolve, reject) {
        FileObjectToCache(scene, loadCallback, 'atlasjson', key, null, resolve);
    })
}


export default AddAtlasFiles;