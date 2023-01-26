import { GridTable } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateImageLabel from '../builders/CreateImageLabel.js';
import DeepClone from '../../../../../phaser3-rex-notes/plugins/utils/object/DeepClone.js';

class ImageList extends GridTable {
    constructor(scene, config) {
        if (config === undefined) {
            config = {};
        }

        config.scrollMode = 0;

        if (!config.table) {
            config.table = {};
        }
        if (!config.table.hasOwnProperty('cellHeight')) {
            config.table.cellHeight = 80;
        }
        config.table.enableLayer = true;
        config.table.reuseCellContainer = true;

        var imageLabelConfig = config.label || {};
        config.createCellContainerCallback = function (cell, cellContainer) {
            var scene = cell.scene,
                width = cell.width,
                height = cell.height,
                item = cell.item,
                index = cell.index;
            if (cellContainer === null) {
                cellContainer = CreateImageLabel(scene, imageLabelConfig)
            }

            cellContainer
                .setMinSize(width, height)
                .setTexture(item)
                .setText(item);

            return cellContainer;

        }

        super(scene, config);
    }
}

export default ImageList;