import GridTable from '../../../../../phaser3-rex-notes/templates/ui/gridtable/GridTable.js';
import Card from './Card.js';
import {
    COLOR_PANEL_BG, COLOR_PANEL_BOARD,
    COLOR_CONTENT,
    COLOR_THUMB, COLOR_TRACK
} from '../../scenes/const.js';

class GalleryPanel extends GridTable {
    constructor(scene) {
        var background = scene.add.rectangle(0, 0, 1, 1, COLOR_PANEL_BG).setStrokeStyle(6, COLOR_PANEL_BOARD);

        super(scene, {
            columns: 3,
            space: { left: 30, right: 30, top: 30, bottom: 30, },

            background: background,
            table: {
                slider: {
                    track: {
                        color: COLOR_TRACK,
                        alpha: 0.5,
                        width: 30,
                    },
                    thumb: {
                        color: COLOR_THUMB,
                        width: 40,
                    },
                    adaptThumbSize: true,
                },
                mouseWheelScroller: {
                    speed: 0.3
                },
                alwaysScrollable: false,
            },

            createCellContainerCallback(cell, cellContainer) {
                var scene = cell.scene,
                    width = cell.width,
                    height = cell.height,
                    item = cell.item,
                    items = cell.items,
                    index = cell.index;
                if (cellContainer === null) { // No reusable cell container, create a new one
                    cellContainer = new Card(scene);
                    cellContainer.setMinSize(width - 20, height - 20);
                }
                // Set child properties of cell container ...
                cellContainer.setCardContent(item.title, item.image, item.unlocked);
                cell.setCellContainerAlign('center');  // Set alignment of cellContainer

                return cellContainer; // or null
            }
        })
    }
}

export default GalleryPanel;