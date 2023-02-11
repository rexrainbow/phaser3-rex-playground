import ImagesPanel from '../imagespanel/ImagesPanel';

var CreateImagesPanel = function (scene, configObj, model) {
    var imagesPanel = new ImagesPanel(scene, configObj, model);
    scene.add.existing(imagesPanel);
    return imagesPanel;
}

export default CreateImagesPanel;