import ImageContainer from '../imagecontainer/ImageContainer.js';

var CreateImageContainer = function (scene, config, model) {
    var imageContainer = new ImageContainer(scene, config, model);
    scene.add.existing(imageContainer);
    return imageContainer;
}

export default CreateImageContainer;