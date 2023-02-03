import { Label } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import BuildDisplayLabelConfig from '../../../../../phaser3-rex-notes/templates/ui/utils/build/BuildDisplayLabelConfig.js';

class ExportButton extends Label {
    constructor(scene, config, model) {
        config = BuildDisplayLabelConfig(scene, config);
        super(scene, config);

        this
            .resetDisplayContent({
                text: 'Export'
            })
            .onClick(function () {
                model.generateOutput(scene);
            });
    }
}

export default ExportButton;