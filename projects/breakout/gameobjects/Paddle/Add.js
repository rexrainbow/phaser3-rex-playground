import Paddle from './Paddle.js';

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

    Object.assign(gameObject, Paddle);
    gameObject._init(config);
    return gameObject;
};