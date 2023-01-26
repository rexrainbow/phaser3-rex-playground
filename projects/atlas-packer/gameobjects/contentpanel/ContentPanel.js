import { Sizer } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import MainSizer from './MainSizer';

class ContentPanel extends Sizer {
    constructor(scene, config) {
        super(scene, config);

        this.model = config.model;

        var mainSizer = new MainSizer(scene, config);
        scene.add.existing(mainSizer);
        this.add(
            mainSizer,
            { proportion: 1, expand: true }
        );

    }
}

export default ContentPanel;