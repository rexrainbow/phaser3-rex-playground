# Atlas-packer

An atlas packer for phaser3 game engine.

## Run project

Double click `preview.bat` file.

## Export project

Double click `build-html.bat` file.

## Diagram of objects' structure

```mermaid
graph TD

Top["top<br>(HolyGrail)"]
Top --> LeftSidePanel["LeftSide<br>(Sizer)"]
Top --> HeaderPanel["Header<br>(Sizer)"]
Top --> ContentPanel["Content<br>(Sizer)"]

subgraph Content
  ContentPanel --> ImagesPanel["Images panel<br>(OverlapSizer)"]
  ImagesPanel --> ImagesPanelBackground["Background<br>(RoundRectangle)"]
  ImagesPanel --> ImageDropZone["Image drop-zone<br>(FileDropZone)"]
  ImagesPanel --> ImageContainer["Image container<br>(ContainerLite)"]
  ImagesPanel --> ImagesOutline["Images' outline<br>(Graphics)"]
  ImagesPanel --> ImageMarker["Image marker<br>(Graphics)"]

  ImageContainer --> ImageContainerBackground["Background<br>(RoundRectangle)"]
  ImageContainer --> Layer
  ImageContainer --> Images["Images<br>(Image)"]
  Images -.-> |Render on| Layer["(Layer)"]

  ContentPanel --> ImagesPanelSettingPanel["Setting panel of Images panel<br>(Tweaker)"]  
end

subgraph LeftSide
  LeftSidePanel --> ImageList["Image list<br>(GridTable)"]
  ImageList --> ImageLabel["Cell: Image label<br>(SimpleLabel)"]
  LeftSidePanel --> ImageDataPanel["Image-data panel<br>(Tweaker)"]
end

subgraph Header
  HeaderPanel --> LoadImageFilesButton["Load image button<br>(FileSelectorButton)"]
  HeaderPanel --> ClearImagesButton["Clear image button<br>(SimpleLabel)"]
  HeaderPanel --> ExportButton["Export button<br>(SimpleLabel)"]
  HeaderPanel --> AboutButton["Abour button<br>(SimpleLabel)"]
  AboutButton --> AboutModalDialog["About modal-dialog<br>(ConfirmDialog)"]
end


```