import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import fs from 'fs';

const dist = process.env.dist;
const distFolder = path.resolve(__dirname, dist);

const projectMain = process.env.main;
const htmlTemplate = process.env.htmltemplate || './examples/index.tmpl';
const assetsFolder = process.env.assets || './assets';

console.log(distFolder)
console.log(projectMain)
console.log(htmlTemplate)
console.log(assetsFolder)

if (!projectMain || !fs.existsSync(projectMain)) {
    throw new Error('No entry point');
}

export default defineConfig(({ command, mode }) => {
    return {
        define: {
            __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'false')),
            "typeof WEBGL_DEBUG": JSON.stringify(false)
        },
        build: {
            sourcemap: false,
            minify: 'terser',
            terserOptions: {
                compress: {
                    drop_console: true,
                    drop_debugger: true
                }
            },
            outDir: distFolder,
            assetsDir: assetsFolder
        },
        plugins: [
            createHtmlPlugin({
                entry: projectMain,
                template: htmlTemplate,
                minify: false,
            }),
        ],
        resolve: {
            extensions: ['.ts', '.js'],
            alias: {
                '/assets': assetsFolder
            }
        }
    }
});
