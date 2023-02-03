import GenerateJSONData from './GenerateJSONDataBlob.js';
import GenerateImageBlob from './GenerateImageBlob.js';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

var GenerateOutput = function (scene) {
    var imageDataArray = this.imageDataList.list;
    var promiseJSONData = GenerateJSONData(scene, imageDataArray);
    var promiseImageBlob = GenerateImageBlob(scene, imageDataArray);
    Promise.all([promiseJSONData, promiseImageBlob])
        .then(function (values) {
            var zip = new JSZip();
            zip.file('frames.json', values[0]);
            zip.file('image.png', values[1]);

            return zip.generateAsync({ type: 'blob' });
        })
        .then(function (blob) {
            saveAs(blob, 'altas.zip');
        })

}

export default GenerateOutput;