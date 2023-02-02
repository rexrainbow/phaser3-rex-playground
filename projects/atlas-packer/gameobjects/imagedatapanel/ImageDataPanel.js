import ImageDataPanelBase from './ImageDataPanelBase.js';

class ImageDataPanel extends ImageDataPanelBase {
    constructor(scene, config) {
        super(scene, config);
        this.model = config.model;

        this.model
            .on('selectimage', function (imageData) {
                this.setBindingTarget(imageData);
            }, this)
            .on('clearimages', function () {
                this.setBindingTarget({
                    x: '', y: '', width: '', height: ''
                });
            }, this)
    }
}

export default ImageDataPanel;