import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import VitePluginBrowserSync from 'vite-plugin-browser-sync';
import fs from 'fs';
import path from 'path';

// All paths are specified as relative paths.
const projectMain = process.env.main;
const htmlTemplate = process.env.htmltemplate || './examples/index.tmpl';
const assetsFolder = process.env.assets || './assets';

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
            alias: {
                '/assets': assetsFolder
            }
        }
    }
});
