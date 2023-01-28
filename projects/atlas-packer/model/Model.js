import GetFileName from '../utils/GetFileName.js';
import WaitEvents from '../../../../phaser3-rex-notes/plugins/waitevents.js';
import FileObjectToCache from '../../../../phaser3-rex-notes/plugins/utils/loader/FileObjectToCache';

const EE = Phaser.Events.EventEmitter;
const List = Phaser.Structs.List;

class Model extends EE {
    constructor() {
        super();

        this.imageKeys = new List();
    }

    destroy() {
        this.imageKeys.removeAll();
        this.imageKeys = null;

        super.destroy();
    }

    hasImage(key) {
        return this.imageKeys.exists(key);
    }

    addImageFiles(scene, files) {
        var self = this;
        files = files.filter(function (file) {
            var key = GetFileName(file);
            file.imageKey = key;
            return !self.hasImage(key);
        });
        if (files.length === 0) {
            return this;
        }

        var newImageKeys = [];

        var waitEvents = new WaitEvents(function () {
            self.emit('addimages', newImageKeys);
        });

        for (var i = 0, cnt = files.length; i < cnt; i++) {
            var file = files[i];
            var key = file.imageKey;
            this.imageKeys.add(key);
            newImageKeys.push(key);
            FileObjectToCache(scene, file, 'image', key, undefined, waitEvents.waitCallback());

        }

        return this;
    }

    clearImages() {
        this.emit('clearimages', this.imageKeys.list);
        this.imageKeys.removeAll();
        return this;
    }
}

export default Model;