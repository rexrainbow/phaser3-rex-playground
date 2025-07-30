import ModalDialog from '../modaldialog/ModalDialog.js';
import LevelSelectorBlock from './LevelSelectorBlock.js';

class GalleryDialog extends ModalDialog {
    constructor(scene, config) {
        var levelSelectorBlock = new LevelSelectorBlock(scene, config);
        scene.add.existing(levelSelectorBlock);

        super(scene, levelSelectorBlock);

        this.levelSelectorBlock = levelSelectorBlock;

        // Route 'select' event out
        levelSelectorBlock
            .on('select', function (levelData) {
                this.emit('select', levelData);
            }, this)

    }

    setItems(items) {
        // items: {$level, $title, image, 'image-url', $story, $completed}[]
        this.levelSelectorBlock.setItems(items);
        return this;
    }
}

export default GalleryDialog;