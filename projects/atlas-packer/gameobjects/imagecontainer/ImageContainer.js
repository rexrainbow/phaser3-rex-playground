import ContainerLite from '../../../../../phaser3-rex-notes/plugins/containerlite.js';
import { GetDisplayWidth, GetDisplayHeight } from '../../../../../phaser3-rex-notes/plugins/utils/size/GetDisplaySize.js';
import Methods from './Methods.js';


class ImageContainer extends ContainerLite {
    get left() {
        return this.x - (GetDisplayWidth(this) * this.originX);
    }

    set left(value) {
        this.x += (value - this.left);
    }

    get right() {
        return this.left + GetDisplayWidth(this);
    }

    set right(value) {
        this.x += (value - this.right);
    }

    get centerX() {
        return this.left + (GetDisplayWidth(this) / 2);
    }

    set centerX(value) {
        this.x += (value - this.centerX);
    }

    get top() {
        return this.y - (GetDisplayHeight(this) * this.originY);
    }

    set top(value) {
        this.y += (value - this.top);
    }

    get bottom() {
        return this.top + GetDisplayHeight(this);
    }

    set bottom(value) {
        this.y += (value - this.bottom);
    }

    get centerY() {
        return this.top + (GetDisplayHeight(this) / 2);
    }

    set centerY(value) {
        this.y += (value - this.centerY);
    }
}

Object.assign(
    ImageContainer.prototype,
    Methods,
)

export default ImageContainer;