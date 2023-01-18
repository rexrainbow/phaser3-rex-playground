@echo off
set dist=./app/export-html-test
set htmlTemplate=./projects/app-sample/index.tmpl
set main=./projects/app-sample/main.js
set assets=./projects/app-sample/assets
cd ..
cd ..
webpack --config webpack.production.config.js