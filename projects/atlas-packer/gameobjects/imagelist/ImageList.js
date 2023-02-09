import { GridTable } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateImageLabel from '../builders/CreateImageLabel.js';

class ImageList extends GridTable {
    constructor(scene, configObj, model) {
        var config = configObj.cloneValue('.');
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
                imageLabelConfig.width = width;
                imageLabelConfig.height = height;
                cellContainer = CreateImageLabel(scene, imageLabelConfig)
            }

            cellContainer
                .resetDisplayContent({
                    icon: item.key,
                    text: item.name
                })

            return cellContainer;

        }

        super(scene, config);

        model
            .on('addimages', function (newImageDataArray, imageDataArray) {
                this.setItems(imageDataArray);
            }, this)
            .on('clearimages', function () {
                this.setItems();
            }, this)
            .on('renameimage', function () {
                this.refresh();
            }, this)

        this.on('cell.click', function (cellContainer, cellIndex, pointer, event) {
            model.selectImage(cellContainer.text);
        }, this);

    }
}

export default ImageList;