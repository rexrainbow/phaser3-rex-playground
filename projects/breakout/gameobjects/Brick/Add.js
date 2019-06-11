import Brick from './Brick.js';

const GetValue = Phaser.Utils.Objects.GetValue;
const IsPlainObject = Phaser.Utils.Objects.IsPlainObject;

export default function (gameObject, config) {
    if (IsPlainObject(gameObject)) {
        config = gameObject;
        gameObject = undefined;
    }
    if (gameObject === undefined) {
        gameObject = GetValue(config, 'gameObject', undefined);
    }

    Object.assign(gameObject, Brick);
    gameObject._init(config);
    return gameObject;
};