import ImageDataPanelBase from './ImageDataPanelBase.js';

class ImageDataPanel extends ImageDataPanelBase {
    constructor(scene, config, model) {
        super(scene, config, model);

        model
            .on('selectimage', function (imageData) {
                this.setBindingTarget(imageData);
            }, this)
            .on('clearimages', function () {
                this.setBindingTarget({ x: '', y: '', width: '', height: '' });
            }, this)
    }
}

export default ImageDataPanel;