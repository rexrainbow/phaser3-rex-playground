import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';
import fs from 'fs';

const dist = process.env.dist;
const projectMain = process.env.main;
const htmlTemplate = process.env.htmltemplate || './examples/index.tmpl';
const assetsFolder = process.env.assets || './assets';

console.log('To            :', dist)
console.log('JS entry      :', projectMain)
console.log('HTML template :', htmlTemplate)
console.log('Assets        :', assetsFolder)

if (!projectMain || !fs.existsSync(projectMain)) {
    throw new Error('No entry point');
}

var GetRelativePath = function (referencePath, targetPath) {
    const referenceDir = path.dirname(referencePath);
    let relPath = path.relative(referenceDir, targetPath);

    if (!relPath.startsWith('./') && !relPath.startsWith('../')) {
        relPath = './' + relPath;
    }

    return relPath;
}

const relatedProjectMain = GetRelativePath(htmlTemplate, projectMain);
console.log(relatedProjectMain)

export default defineConfig(({ command, mode }) => {
    return {
        build: {
            sourcemap: false,
            minify: 'terser',
            terserOptions: {
                compress: {
                    drop_console: true,
                    drop_debugger: true
                }
            },
            outDir: dist,            
        },
        plugins: [
            createHtmlPlugin({
                entry: relatedProjectMain,
                template: htmlTemplate,
                minify: true,
            }),
            viteStaticCopy({
                targets: [
                    {
                        src: assetsFolder,
                        dest: '/assets'
                    }
                ]
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
