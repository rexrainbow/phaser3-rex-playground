import ImageList from '../imagelist/ImageList.js';

var CreateImageList = function (scene, config) {    
    var imageList = new ImageList(scene, config)
    scene.add.existing(imageList);

    return imageList;
}

export default CreateImageList;