# Model

Global data manager/methods/event emitter

## Methods

### Add image files

```javascript
model.addImageFiles(files);
```

### Remove an image

```javascript
model.removeImage(name);
```

### Clear all image files

```javascript
model.clearImages();
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
- `'removeimage'`
    - Parameters : imageData
- `'clearimages'`
    - Parameters : 
- `'selectimage'`
    - Parameters : imageData