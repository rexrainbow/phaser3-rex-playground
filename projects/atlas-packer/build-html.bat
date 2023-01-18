@echo off
set dist=./app/export-html-test
set htmlTemplate=./projects/atlas-packer/index.tmpl
set main=./projects/atlas-packer/main.js
set assets=./projects/atlas-packer/assets
cd ..
cd ..
webpack --config webpack.production.config.js