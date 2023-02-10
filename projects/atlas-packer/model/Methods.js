import HasImage from './HasImage.js';
import AddImageFiles from './AddImageFiles.js';
import ChangeImageName from './ChangeImageName.js';
import RemoveImage from './RemoveImage.js';
import ClearImages from './ClearImages.js';
import SelectImage from './SelectImage.js';
import GenerateOutput from './output/GenerateOutput.js';

var Methods = {
    hasImage: HasImage,
    addImageFiles: AddImageFiles,
    changeImageName: ChangeImageName,
    removeImage: RemoveImage,
    clearImages: ClearImages,
    selectImage: SelectImage,
    generateOutput: GenerateOutput,
}

export default Methods;