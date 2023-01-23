import ImageIcon from '../imageicon/ImageIcon.js';

var CreateImageIcon = function (scene, config) {
    var imageIcon = new ImageIcon(scene, config);    
    scene.add.existing(imageIcon);

    return imageIcon;
}

export default CreateImageIcon;