const sharp = require('sharp');
const cbor = require('node-cbor');
const JSZip = require("jszip");
const fs = require('fs');

const key = 'classroom'
const inputFile = `./assets/${key}.png`;
const outputFile = `./assets/${key}.zip`;

sharp(inputFile)
    .raw()
    .ensureAlpha()
    .toBuffer({ resolveWithObject: true })
    .then(({ data, info }) => {
        const { width, height } = info;

        const cborData = {
            width,
            height,
            data: Buffer.from(data),
        };

        const serializedData = cbor.encode(cborData);

        const zip = new JSZip();
        zip.file(key, serializedData, {
            compression: 'DEFLATE',
            compressionOptions: { level: 9 },
        });
        zip
            .generateAsync({ type: 'nodebuffer' })
            .then((content) => {
                fs.writeFile(outputFile, content, (err) => {
                    if (err) {
                        console.error('Error processing image:', err)
                    } else {
                        console.log(`Zip file saved to ${outputFile}`);
                    }
                });
            })

    })
    .catch(err => console.error('Error processing zip:', err));