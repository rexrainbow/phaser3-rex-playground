const GetValue = Phaser.Utils.Objects.GetValue;
const IsPlainObject = Phaser.Utils.Objects.IsPlainObject;

export default function (gameObject, config, decorator) {
    if (IsPlainObject(gameObject)) {
        config = gameObject;
        gameObject = undefined;
        decorator = undefined;
    } else if (decorator === undefined) {
        decorator = config;
        config = undefined;
    }

    if (gameObject === undefined) {
        gameObject = GetValue(config, 'gameObject', undefined);
    }
    if (decorator === undefined) {
        decorator = GetValue(config, 'decorator', undefined);
    }

    if (Array.isArray(gameObject)) {
        let gameObjects = gameObject;
        for (let i = 0, cnt = gameObjects.length; i < cnt; i++) {
            gameObject = gameObjects[i];
            Object.assign(gameObject, decorator);
            gameObject._init(config);
        }
    } else {
        Object.assign(gameObject, decorator);
        gameObject._init(config);
    }
};