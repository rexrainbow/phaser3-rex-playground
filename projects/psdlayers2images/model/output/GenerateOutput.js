import GenerateJSONDataBlob from './GenerateJSONDataBlob.js';
import GenerateImageBlobArray from './GenerateImageBlobArray.js';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

var GenerateOutput = function () {
    var layerList = this.layerList.list;
    var promiseJSONDataBlob = GenerateJSONDataBlob(layerList);
    var promiseImageBlobArray = GenerateImageBlobArray(layerList);
    Promise.all([promiseJSONDataBlob, ...promiseImageBlobArray])
        .then(function (blobArray) {
            var zip = new JSZip();

            // blobArray[0] is json
            zip.file('layers.json', blobArray[0]);

            // blobArray[1...] are image of each layer
            for (var i = 1, cnt = blobArray.length; i < cnt; i++) {
                var fileName = layerList[i - 1].name;
                zip.file(`${fileName}.png`, blobArray[i]);
            }

            return zip.generateAsync({ type: 'blob' });
        })
        .then(function (blob) {
            saveAs(blob, 'psd-layers.zip');
        })

}

export default GenerateOutput;