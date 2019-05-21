@echo off
set dist=./app/export-html-test
set htmlTemplate=./projects/sample/index.tmpl
set main=./projects/sample/main.js
set assets=./projects/sample/assets
cd ..
cd ..
webpack --config webpack.production.config.js