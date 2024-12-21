const sharp = require('sharp');
const cbor = require('node-cbor');
const fs = require('fs');

const inputFile = './assets/classroom.png';
const outputFile = './assets/classroom.cbor';

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

        fs.writeFileSync(outputFile, serializedData);
        console.log(`CBOR file saved to ${outputFile}`);
    })
    .catch(err => console.error('Error processing image:', err));