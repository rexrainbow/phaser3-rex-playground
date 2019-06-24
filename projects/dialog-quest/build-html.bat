@echo off
set dist=./app/dialog-quest
set htmlTemplate=./projects/dialog-quest/index.tmpl
set main=./projects/dialog-quest/main.js
set assets=./projects/dialog-quest/assets
cd ..
cd ..
webpack --config webpack.production.config.js