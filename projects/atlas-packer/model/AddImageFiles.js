import GetFileName from '../utils/GetFileName.js';
import FileObjectToCache from '../../../../phaser3-rex-notes/plugins/utils/loader/FileObjectToCache.js';
import CreateImageData from './CreateImageData.js';

const UUID = Phaser.Utils.String.UUID;

var AddImageFiles = function (files) {
    var self = this;
    files = files.filter(function (file) {
        return !self.hasImage(GetFileName(file));
    });
    if (files.length === 0) {
        return this;
    }

    var newImageDataArray = [];

    var tasks = [];
    var scene = this.scene;
    for (var i = 0, cnt = files.length; i < cnt; i++) {
        var file = files[i];

        var imageData = CreateImageData();
        imageData.name = GetFileName(file);
        imageData.key = UUID();
        imageData.frame = undefined;

        this.imageDataList.add(imageData);
        newImageDataArray.push(imageData);

        tasks.push(FileObjectToCachePromise(scene, file, imageData.key));
    }

    Promise.all(tasks)
        .then(function () {
            self.emit('addimages', newImageDataArray, self.imageDataList.list);
            self.emit('postupdateimages');
        })

    return this;
}

var FileObjectToCachePromise = function (scene, file, key) {
    return new Promise(function (resolve, reject) {
        FileObjectToCache(scene, file, 'image', key, null, resolve);
    })
}

export default AddImageFiles;