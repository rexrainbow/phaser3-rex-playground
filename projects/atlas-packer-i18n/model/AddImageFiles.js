import GetFileName from '../utils/GetFileName.js';
import FileObjectToCache from '../../../../phaser3-rex-notes/plugins/utils/loader/FileObjectToCache';
import CreateImageData from './CreateImageData.js';

var AddImageFiles = function (files) {
    var self = this;
    files = files.filter(function (file) {
        var key = GetFileName(file);
        file.imageKey = key;
        return !self.hasImage(key);
    });
    if (files.length === 0) {
        return this;
    }

    var newImageDataArray = [];

    var tasks = [];
    var scene = this.scene;
    for (var i = 0, cnt = files.length; i < cnt; i++) {
        var file = files[i];
        var key = file.imageKey;

        var imageData = CreateImageData();
        imageData.name = key;
        imageData.key = key;

        this.imageDataList.add(imageData);
        newImageDataArray.push(imageData);

        tasks.push(FileObjectToCachePromise(scene, file, 'image', key));
    }

    Promise.all(tasks)
        .then(function () {
            self.emit('addimages', newImageDataArray, self.imageDataList.list);
            self.emit('postupdateimages');
        })

    return this;
}

var FileObjectToCachePromise = function (scene, file, loaderType, key, cacheType) {
    return new Promise(function (resolve, reject) {
        FileObjectToCache(scene, file, loaderType, key, cacheType, resolve);
    })
}

export default AddImageFiles;