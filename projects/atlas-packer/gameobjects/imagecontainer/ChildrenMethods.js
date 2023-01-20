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

    hasImage(name) {
        return !!this.images.getByName(name);
    }
}