export default {
    addBackground(gameObject) {
        this.backgrounds.add(gameObject);
        this.addLocal(gameObject);
        return this;
    },

    addImage(gameObject) {
        this.images.add(gameObject);
        this.addLocal(gameObject);
        return this;
    },

    removeImage(gameObject) {
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
    }
}