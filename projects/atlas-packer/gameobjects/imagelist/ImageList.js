import { GridTable } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateImageLabel from '../builders/CreateImageLabel.js';

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
        config.table.reuseCellContainer = true;

        config.createCellContainerCallback = function (cell, cellContainer) {
            var scene = cell.scene,
                width = cell.width,
                height = cell.height,
                item = cell.item,
                index = cell.index;
            if (cellContainer === null) {
                cellContainer = CreateImageLabel(scene, {
                    width: width, height: height,
                    orientation: 0,
                    background: {
                        strokeColor: 0xffffff,
                    },
                    space: {
                        left: 10, right: 10, top: 5, bottom: 5,
                        icon: 10,
                    }
                })
            }
            cellContainer.setTexture(item);
            return cellContainer;

        }

        super(scene, config);
    }
}

export default ImageList;