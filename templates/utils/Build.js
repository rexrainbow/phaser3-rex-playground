const GetValue = Phaser.Utils.Objects.GetValue;
const IsPlainObject = Phaser.Utils.Objects.IsPlainObject;

export default function (gameObject, decorator, config) {
    if (IsPlainObject(gameObject)) {
        config = gameObject;
        gameObject = undefined;
        decorator = undefined;
    }

    if (gameObject === undefined) {
        gameObject = GetValue(config, 'gameObject', undefined);
    }
    if (decorator === undefined) {
        decorator = GetValue(config, 'decorator', undefined);
    }

    if (Array.isArray(gameObject)) {
        var gameObjects = gameObject;
        for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
            gameObject = gameObjects[i];
            Object.assign(gameObject, decorator);
            gameObject._init(config);
        }
    } else {
        Object.assign(gameObject, decorator);
        gameObject._init(config);
    }
};