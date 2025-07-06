import { defineConfig, normalizePath } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';
import fs from 'fs';

var getRelativePath = function (referencePath, targetPath) {
    const referenceDir = path.dirname(referencePath);
    let relPath = normalizePath(path.relative(referenceDir, targetPath));

    if (!relPath.startsWith('./') && !relPath.startsWith('../')) {
        relPath = './' + relPath;
    }

    return relPath;
}

// root path, build.outDir
const dist = process.env.dist;

// JS entry, get related path based on htmlTemplate
const projectMain = process.env.main;

// HTML template, main file
const htmlTemplate = process.env.htmltemplate || './examples/index.tmpl';

// Assets folder path, copy folders to output
const assetsFolder = process.env.assets || './assets';

console.log('To            :', dist)
console.log('JS entry      :', projectMain)
console.log('HTML template :', htmlTemplate)
console.log('Assets        :', assetsFolder)


if (!dist) {
    throw new Error('No output path');
}

if (!projectMain || !fs.existsSync(projectMain)) {
    throw new Error('No entry point');
}

// JS entry, get related path based on htmlTemplate
const relatedProjectMain = getRelativePath(htmlTemplate, projectMain);
// console.log(relatedProjectMain)
// Output JS entry file
const fileNameWithoutExt = path.basename(projectMain, path.extname(projectMain));
const fileExt = path.extname(projectMain);
const entryFileNames = `${fileNameWithoutExt}-[hash]${fileExt}`;

const assetsFromFolder = normalizePath(path.resolve(__dirname, assetsFolder));

export default defineConfig(({ command, mode }) => {
    const baseConfig = {
        plugins: [
            createHtmlPlugin({
                entry: relatedProjectMain,
                template: htmlTemplate,
                minify: true,
            }),
            viteStaticCopy({
                targets: [
                    {
                        src: assetsFromFolder,
                        dest: './'
                    }
                ]
            }),
            {
                name: 'replace-webgl-debug',
                enforce: 'pre',
                transform(code, id) {
                    const replacedCode = code.replace(/typeof\s+WEBGL_DEBUG/g, JSON.stringify(false));
                    return {
                        code: replacedCode,
                        map: null
                    };
                }
            }
        ],
        build: {
            sourcemap: false,
            minify: 'terser',
            terserOptions: {
                compress: {
                    passes: 2
                },
                mangle: true,
                format: {
                    comments: false
                }
            },
            outDir: dist,
            rollupOptions: {
                input: projectMain,
                output: {
                    entryFileNames: entryFileNames,
                }
            }
        },
        resolve: {
            extensions: ['.ts', '.js'],
            alias: {
            }
        },
    }

    return baseConfig;
});
