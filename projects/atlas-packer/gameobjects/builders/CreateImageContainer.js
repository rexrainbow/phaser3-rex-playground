import ImageContainer from '../imagecontainer/ImageContainer.js';

var CreateImageContainer = function (scene, config) {
    var imageContainer = new ImageContainer(scene, config);
    scene.add.existing(imageContainer);
    return imageContainer;
}

export default CreateImageContainer;