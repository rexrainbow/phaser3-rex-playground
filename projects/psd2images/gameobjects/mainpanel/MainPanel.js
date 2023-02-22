import { OverlapSizer } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import CreateBackground from '../../../../../phaser3-rex-notes/templates/ui/utils/build/CreateBackground.js';
import CreatePSDDropZone from '../builders/CreatePSDDropZone.js';

const GetValue = Phaser.Utils.Objects.GetValue;

class MainPanel extends OverlapSizer {
    constructor(scene, configObj, model) {
        var config = configObj.cloneValue('.');

        super(scene, config);

        // Background
        var background = CreateBackground(scene, {
            color: GetValue(config, 'backgroundColor', 0x333333)
        });
        this.addBackground(background);

        // Image drop zone
        var psdDropZone = CreatePSDDropZone(scene);
        this.addBackground(psdDropZone);

        // PlaceHolder text
        var placeHolderContent = 'Drag & drop PSD files here';
        var placeHolderStyle = GetValue(config, 'placeHolder');
        var placeholder = scene.add.text(0, 0, placeHolderContent, placeHolderStyle).setOrigin(0.5);
        this.add(
            placeholder,
            { align: 'center', expand: false }
        )

        this.addChildrenMap('psdDropZone', psdDropZone);
        this.addChildrenMap('placeholder', placeholder);

        psdDropZone.on('drop.psd', function (files) {
            model.addPSDFiles(files);
        });
    }
}

export default MainPanel;