import ImageList from '../imagelist/ImageList.js';

var CreateImageList = function (scene, config, model) {    
    var imageList = new ImageList(scene, config, model)
    scene.add.existing(imageList);

    return imageList;
}

export default CreateImageList;