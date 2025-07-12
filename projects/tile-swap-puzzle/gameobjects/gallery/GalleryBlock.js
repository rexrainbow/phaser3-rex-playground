import GridTable from '../../../../../phaser3-rex-notes/templates/ui/gridtable/GridTable.js';
import Card from './Card.js';
import RoundRectangle from '../../../../../phaser3-rex-notes/plugins/roundrectangle.js';
import CreateStoryDialog from '../storyblock/CreateStoryDialog.js';
import {
    COLOR_PANEL_BG, COLOR_PANEL_BOARD,
    COLOR_BUTTON_BG, COLOR_BUTTON_BOARD, COLOR_BUTTON_HOVER_BOARD,
    COLOR_THUMB, COLOR_TRACK
} from '../../scenes/ColorPalette.js';

class GalleryBlock extends GridTable {
    constructor(scene) {
        var background = new RoundRectangle(scene, {
            color: COLOR_PANEL_BG,
            strokeWidth: 6,
            strokeColor: COLOR_PANEL_BOARD
        })
        scene.add.existing(background);

        super(scene, {
            space: { left: 30, right: 30, top: 30, bottom: 30, },

            background: background,
            table: {
                columns: 3,
                cellHeight: 500,
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
                    items = cell.items,     // {title, image, 'image-url', story}[]
                    index = cell.index;
                if (cellContainer === null) { // No reusable cell container, create a new one
                    cellContainer = new Card(scene);
                    scene.add.existing(cellContainer);
                }
                // Set child properties of cell container
                cellContainer
                    .setMinSize(width - 40, height - 40)
                    .setCardContent(item.title, item.image, item['image-url'])

                cellContainer.getElement('background')
                    .setFillStyle(COLOR_BUTTON_BG)
                    .setStrokeStyle(5, COLOR_BUTTON_BOARD);

                cellContainer.setData('index', index);

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
                var index = cellContainer.getData('index');
                var item = this.items[index];
                CreateStoryDialog(scene, item.story, item.image);
            }, this)
    }
}

export default GalleryBlock;