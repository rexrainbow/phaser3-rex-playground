# Model

Global data manager/methods/event emitter

## Methods

### Add image files

```javascript
model.addImageFiles(scene, files);
```

### Clear all image files

```javascript
model.clearImages(scene);
```

### Select image

```javascript
model.selectImage(name);
```

## Data structures

### Image data

```javascript
{
    name: string,
    key: string,

    x: number,
    y: number,
    width: number,
    height: number,    
}
```

## Events

- `'addimages'`
    - Parameters : newImageDataArray, totalImageDataArray
- `'renameimage'`
    - Parameters : newName, oldName, imageData
- `'clearimages'`
    - Parameters : totalImageDataArray
- `'selectimage'`
    - Parameters : imageData