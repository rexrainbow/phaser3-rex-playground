import ImageLabel from '../imagelabel/ImageLabel.js';

var CreateImageLabel = function (scene, config) {
    var imageLabel = new ImageLabel(scene, config);
    scene.add.existing(imageLabel);
    
    return imageLabel;
}

export default CreateImageLabel;