import ImageContainer from '../imagecontainer/ImageContainer.js';

var CreateImageContainer = function (scene) {
    var imageContainer = new ImageContainer(scene);
    scene.add.existing(imageContainer);
    return imageContainer;
}

export default CreateImageContainer;