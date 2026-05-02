import { defineConfig, normalizePath } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import VitePluginBrowserSync from 'vite-plugin-browser-sync';
import fs from 'fs';
import path from 'path';

// All paths are specified as relative paths.
const PhaserPath = process.env.phaser || 'node_modules/phaser';
const projectMain = process.env.main;
const htmlTemplate = process.env.htmltemplate || './examples/index.tmpl';
const assetsFolder = process.env.assets || './assets';
const assetsAliasPath = normalizePath(path.resolve(__dirname, assetsFolder));

console.log('Phaser path   :', PhaserPath)
console.log('JS entry      :', projectMain)
console.log('HTML template :', htmlTemplate)
console.log('Assets        :', assetsFolder)

if (!projectMain || !fs.existsSync(projectMain)) {
    throw new Error('No entry point');
}

const entryUrlPath = '/' + path.posix.normalize(projectMain).replace(/^\.?\//, '');

export default defineConfig(({ command, mode }) => {
    return {
        plugins: [
            createHtmlPlugin({
                entry: entryUrlPath,
                template: htmlTemplate,
                minify: false,
            }),
            VitePluginBrowserSync({
                open: true,
            })
        ],
        resolve: {
            extensions: ['.ts', '.js'],
            alias: [
                {
                    find: /^phaser$/,
                    replacement: path.resolve(__dirname, PhaserPath)
                },
                {
                    find: '/assets',
                    replacement: assetsAliasPath
                }
            ],
            dedupe: ['phaser']
        }
    }
});
