import GridTable from '../../../../../phaser3-rex-notes/templates/ui/gridtable/GridTable.js';
import Card from './Card.js';
import RoundRectangle from '../../../../../phaser3-rex-notes/plugins/roundrectangle.js';
import {
    COLOR_PANEL_BG, COLOR_PANEL_BOARD,
    COLOR_BUTTON_BG, COLOR_BUTTON_BOARD, COLOR_BUTTON_HOVER_BOARD,
    COLOR_THUMB, COLOR_TRACK
} from '../../scenes/ColorPalette.js';

const GetValue = Phaser.Utils.Objects.GetValue;

class LevelSelectorBlock extends GridTable {
    constructor(scene, config) {
        var background = new RoundRectangle(scene, {
            color: COLOR_PANEL_BG,
            strokeWidth: 6,
            strokeColor: COLOR_PANEL_BOARD
        })
        scene.add.existing(background);

        var columns = GetValue(config, 'ccolumns', 2);
        var cellHeight = GetValue(config, 'cellHeight', 600);

        super(scene, {
            space: { left: 30, right: 30, top: 30, bottom: 30, },

            background: background,
            table: {
                columns: columns,
                cellHeight: cellHeight,
                reuseCellContainer: true,
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
                    items = cell.items,     // {level, title, image, 'image-url', story, completed}[]
                    index = cell.index;
                if (cellContainer === null) { // No reusable cell container, create a new one
                    cellContainer = new Card(scene);
                    scene.add.existing(cellContainer);
                }
                // Set child properties of cell container
                cellContainer
                    .setMinSize(width - 40, height - 40)
                    .setCardContent(item.title, item.image, item['image-url'], item.completed)

                cellContainer.getElement('background')
                    .setFillStyle(COLOR_BUTTON_BG)
                    .setStrokeStyle(5, COLOR_BUTTON_BOARD);

                cell.setCellContainerAlign('center');  // Set alignment of cellContainer

                return cellContainer; // or null
            }
        })

        this
            .on('cell.over', function (cellContainer, cellIndex, pointer, event) {
                cellContainer.getElement('background').setStrokeStyle(10, COLOR_BUTTON_HOVER_BOARD);
            }, this)
            .on('cell.out', function (cellContainer, cellIndex, pointer, event) {
                cellContainer.getElement('background').setStrokeStyle(5, COLOR_BUTTON_BOARD);
            }, this)
            .on('cell.click', async function (cellContainer, cellIndex, pointer, event) {
                var item = this.items[cellIndex];
                // if (!item.completed) {
                //     return;
                // }

                this.emit('select', item);
            }, this)

    }
}

export default LevelSelectorBlock;