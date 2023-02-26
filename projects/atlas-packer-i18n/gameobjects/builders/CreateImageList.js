import ImageList from '../imagelist/ImageList.js';

var CreateImageList = function (scene, configObj, model) {    
    var imageList = new ImageList(scene, configObj, model)
    scene.add.existing(imageList);

    return imageList;
}

export default CreateImageList;