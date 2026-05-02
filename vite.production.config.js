import { defineConfig, normalizePath } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';
import fs from 'fs';

// root path, build.outDir
const dist = process.env.dist;

// Phaser import path
const PhaserPath = process.env.phaser || 'node_modules/phaser';

// JS entry, get related path based on htmlTemplate
const projectMain = process.env.main;

// HTML template, main file
const htmlTemplate = process.env.htmltemplate || './examples/index.tmpl';

// Assets folder path, copy folders to output
const assetsFolder = process.env.assets || './assets';

console.log('To            :', dist)
console.log('Phaser path   :', PhaserPath)
console.log('JS entry      :', projectMain)
console.log('HTML template :', htmlTemplate)
console.log('Assets        :', assetsFolder)


if (!dist) {
    throw new Error('No output path');
}

if (!projectMain || !fs.existsSync(projectMain)) {
    throw new Error('No entry point');
}

const getRelativePath = function (from, to) {
    const fromFolder = path.dirname(from);
    let relativePath = normalizePath(path.relative(fromFolder, to));

    if (!relativePath.startsWith('.')) {
        relativePath = './' + relativePath;
    }

    return relativePath;
}

const entryUrlPath = getRelativePath(htmlTemplate, projectMain);

// Output JS entry file
const fileNameWithoutExt = path.basename(projectMain, path.extname(projectMain));
const entryFileNames = `${fileNameWithoutExt}-[hash].js`;

const assetsFromFolder = normalizePath(path.resolve(__dirname, assetsFolder));

const escapeRegExp = function (text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const fixHtmlEntryPathPlugin = function () {
    return {
        name: 'fix-html-entry-path',
        enforce: 'post',
        generateBundle(options, bundle) {
            const entryPattern = new RegExp(
                `(<script\\b[^>]*\\bsrc=")[^"]*(${escapeRegExp(fileNameWithoutExt)}-[^"/]+\\.js)(")`,
                'g'
            );

            for (const asset of Object.values(bundle)) {
                if (asset.type !== 'asset' || !asset.fileName.endsWith('.html') || typeof asset.source !== 'string') {
                    continue;
                }

                asset.source = asset.source.replace(entryPattern, '$1./$2$3');
            }
        }
    };
}

export default defineConfig(({ command, mode }) => {
    const plugins = [
        createHtmlPlugin({
            entry: entryUrlPath,
            template: htmlTemplate,
            minify: true,
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
        },
        fixHtmlEntryPathPlugin()
    ];

    if (fs.existsSync(assetsFromFolder)) {
        plugins.push(
            viteStaticCopy({
                targets: [
                    {
                        src: assetsFromFolder,
                        dest: './'
                    }
                ]
            })
        );
    }

    const baseConfig = {
        base: './',
        plugins,
        define: {
            __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'false')),
            WEBGL_RENDERER: JSON.stringify(true),
            CANVAS_RENDERER: JSON.stringify(true),
        },
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
            emptyOutDir: true,
            rollupOptions: {
                output: {
                    entryFileNames: entryFileNames,
                }
            }
        },
        resolve: {
            extensions: ['.ts', '.js'],
            alias: [
                {
                    find: /^phaser$/,
                    replacement: path.resolve(__dirname, PhaserPath)
                },
                {
                    find: '/assets',
                    replacement: assetsFromFolder
                }
            ],
            dedupe: ['phaser']
        },
    }

    return baseConfig;
});
