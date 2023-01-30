export default {
    addBackground(gameObject) {
        this.backgrounds.add(gameObject);
        this.addLocal(gameObject);
        return this;
    },

    addImage(imageData) {
        var gameObject = this.scene.add.image(0, 0, imageData.key)
            .setName(imageData.name)
            .setOrigin(0)

        gameObject
            .setInteractive()
            .on('pointerdown', function () {
                this.model.selectImage(gameObject.name);
            }, this);

        this.images.add(gameObject);
        this.addLocal(gameObject);
        return this;
    },

    removeImage(imageData) {
        var gameObject = this.getImage(imageData.name);
        if (!gameObject) {
            return this;
        }

        this.images.remove(gameObject);
        this.remove(gameObject, true);
        return this;
    },

    clearImages() {
        var gameObjects = this.images.list;
        for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
            this.remove(gameObjects[i], true);
        }
        this.images.removeAll();
        return this;
    },

    getImage(name) {
        return this.images.getByName(name);
    },

    renameImage(oldName, newName) {
        this.images.getByName(oldName).setName(newName);
        return this;
    }
}