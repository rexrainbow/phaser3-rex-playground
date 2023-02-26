# Atlas-packer

An atlas packer for phaser3 game engine.

## Online demo

## Run project

Double click `preview.bat` file.

## Export project

Double click `build-html.bat` file.

## Diagram of objects' structure

```mermaid
graph TD

subgraph ui
  Top["top<br>(HolyGrail)"]
  Top --- LeftSidePanel["LeftSide<br>(Sizer)"]
  Top --- HeaderPanel["Header<br>(Sizer)"]
  Top --- ContentPanel["Content<br>(Sizer)"]
end

style ui color:transparent
style ui fill:transparent
style ui stroke:transparent
```

### Left-side panel

```mermaid
graph TD

subgraph ui
  LeftSidePanel["LeftSide<br>(Sizer)"]
  
  LeftSidePanel --- ImageList["Image list<br>(GridTable)"]
  ImageList --- ImageLabel["Cell: Image label<br>(SimpleLabel)"]
  LeftSidePanel --- ImageDataPanel["Image-data panel<br>(Tweaker)"]
end

style ui color:transparent
style ui fill:transparent
style ui stroke:transparent

model((model))
model -.-> ImageList
ImageList -.-> |selectImage<br>removeImage| model

ImageDataPanel -.-> |hasImage<br>changeImageName| model
model -.-> ImageDataPanel
```

### Header panel

```mermaid
graph TD

subgraph ui
  HeaderPanel["Header<br>(Sizer)"]
  HeaderPanel --- LoadImageFilesButton["Load image button<br>(FileSelectorButton)"]
  HeaderPanel --- ClearImagesButton["Clear image button<br>(SimpleLabel)"]
  HeaderPanel --- ExportButton["Export button<br>(SimpleLabel)"]
  HeaderPanel --- Space0["(Space)"]
  HeaderPanel --- AboutButton["Abour button<br>(SimpleLabel)"]
  AboutButton -.-> AboutModalDialog["About modal-dialog<br>(ConfirmDialog)"]
end

style ui color:transparent
style ui fill:transparent
style ui stroke:transparent

model((model))
LoadImageFilesButton -.-> |addImageFiles| model
ClearImagesButton -.-> |clearImages| model
ExportButton -.-> |generateOutput| model
```

### Content panel

```mermaid
graph TD

subgraph ui
  ContentPanel["Content<br>(Sizer)"]
  ContentPanel --- ImagesPanel["Images panel<br>(OverlapSizer)"]
  ImagesPanel --- ImagesPanelBackground["Background<br>(RoundRectangle)"]
  ImagesPanel --- ImageDropZone["Image drop-zone<br>(FileDropZone)"]
  ImagesPanel --- ImageContainer["Image container<br>(ContainerLite)"]
  ImagesPanel --- ImagesOutline["Images' outline<br>(Graphics)"]
  ImagesPanel --- ImageMarker["Image marker<br>(Graphics)"]

  ImageContainer --- ImageContainerBackground["Background<br>(RoundRectangle)"]
  ImageContainer --- Layer
  ImageContainer --- Images["Images<br>(Image)"]
  Images -.-> |Render on| Layer["(Layer)"]

  ContentPanel --- BottomSizer
  BottomSizer --- ImagesPanelSettingPanel["Setting panel<br>(Tweaker)"]
  BottomSizer --- Space0["(Space)"]
  BottomSizer --- StatusPanel["Status panel<br>(SimpleLabel)"]
end

style ui color:transparent
style ui fill:transparent
style ui stroke:transparent


model((model))
ImageDropZone -.-> |addImageFiles| model
model -.-> ImagesPanel
Images -.-> |selectImage| model
```