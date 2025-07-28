import { EaseMoveMethods } from '../../../../../phaser3-rex-notes/plugins/easemove.js';
import OnCorrectPositionMethods from './OnCorrectPositionMethods.js';
import OnDropTile from './OnDropTile.js';
import GetScore from './GetScore.js';

class Tile extends Phaser.GameObjects.Image {
    constructor(scene, x, y, key, frame) {
        super(scene, x, y, key, frame);

        this._isSwappable = undefined;
        this.targetPosition = {};
        this.currentPosition = {};

        this
            .setInteractive({
                draggable: true,
            })
            .on('drag', function (pointer, dragX, dragY) {
                this.setPosition(dragX, dragY);
                this.scene.children.bringToTop(this);
            }, this)
            .on('dragend', function (pointer, dragX, dragY, dropped) {
                OnDropTile(this, this.activeTiles, 200);
            }, this)

        this.onCorrectPosition();
    }

    setActiveTiles(tiles) {
        this.activeTiles = tiles;
        return this;
    }

    get isSwappable() {
        return this._isSwappable;
    }

    set isSwappable(value) {
        value = !!value;
        if (value === this._isSwappable) {
            return;
        }

        this._isSwappable = value;
        this.input.draggable = value;
    }

    get isHitTargetPosition() {
        return (this.targetPosition.x === this.currentPosition.x) &&
            (this.targetPosition.y === this.currentPosition.y);
    }

    setSwapEnable(enable) {
        this.isSwappable = enable;
        return this;
    }

    setTargetPosition(x, y) {
        this.targetPosition.x = x;
        this.targetPosition.y = y;
        return this;
    }

    setCurrentPosition(x, y) {
        this.currentPosition.x = x;
        this.currentPosition.y = y;

        if (this.isHitTargetPosition) {
            this.onCorrectPosition();
            this.scene.setScore(GetScore(this.activeTiles));
        } else {
            this.onIncorrectPosition();
        }
        return this;
    }
}

Object.assign(
    Tile.prototype,
    OnCorrectPositionMethods,
    EaseMoveMethods,
)

export default Tile;