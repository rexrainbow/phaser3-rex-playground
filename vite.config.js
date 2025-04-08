import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import VitePluginBrowserSync from 'vite-plugin-browser-sync';
import fs from 'fs';

const projectMain = process.env.main;
const htmlTemplate = process.env.htmltemplate || './examples/index.tmpl';
const assetsFolder = process.env.assets || './assets';

console.log(projectMain)
console.log(htmlTemplate)
console.log(assetsFolder)

if (!projectMain || !fs.existsSync(projectMain)) {
    throw new Error('No entry point');
}

export default defineConfig(({ command, mode }) => {
    return {
        define: {
            __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
            "typeof WEBGL_DEBUG": JSON.stringify(false)
        },
        plugins: [
            createHtmlPlugin({
                entry: projectMain,
                template: htmlTemplate,
                minify: false,
            }),
            VitePluginBrowserSync({
                host: process.env.IP || 'localhost',
                port: process.env.PORT ? Number(process.env.PORT) : 3000,
                proxy: 'http://localhost:3000',
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
