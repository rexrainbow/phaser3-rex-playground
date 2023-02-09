import GenerateJSONDataBlob from './GenerateJSONDataBlob.js';
import GenerateImageBlob from './GenerateImageBlob.js';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

var GenerateOutput = function (scene, fileName) {
    if (fileName === undefined) {
        fileName = 'sprites';
    }
    var imageDataArray = this.imageDataList.list;
    var promiseJSONData = GenerateJSONDataBlob(scene, imageDataArray);
    var promiseImageBlob = GenerateImageBlob(scene, imageDataArray);
    Promise.all([promiseJSONData, promiseImageBlob])
        .then(function (values) {
            var zip = new JSZip();
            zip.file(`${fileName}.json`, values[0]);
            zip.file(`${fileName}.png`, values[1]);

            return zip.generateAsync({ type: 'blob' });
        })
        .then(function (blob) {
            saveAs(blob, 'altas.zip');
        })

}

export default GenerateOutput;