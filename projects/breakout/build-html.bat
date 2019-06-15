@echo off
set dist=./app/breakout
set htmlTemplate=./projects/breakout/index.tmpl
set main=./projects/breakout/main.js
set assets=./projects/breakout/assets
cd ..
cd ..
webpack --config webpack.production.config.js