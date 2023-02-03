import GenerateJSONData from './GenerateJSONDataBlob.js';
import GenerateImageBlob from './GenerateImageBlob.js';
import { saveAs } from 'file-saver';

var GenerateOutput = function (scene) {
    var imageDataArray = this.imageDataList.list;
    var promiseJSONData = GenerateJSONData(scene, imageDataArray);
    var promiseImageBlob = GenerateImageBlob(scene, imageDataArray);
    Promise.all([promiseJSONData, promiseImageBlob])
        .then(function (values) {
            saveAs(values[0], 'frames.json');
            saveAs(values[1], 'image.png');
        })

}

export default GenerateOutput;