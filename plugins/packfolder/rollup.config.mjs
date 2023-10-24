import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
    {
        input: 'PackFolder.js', // Your entry file
        output: {
            file: 'dist/packfolder.js', // Output file
            format: 'cjs', // CommonJS module format
        },
        plugins: [commonjs(), nodeResolve()],
    },
    {
        input: 'App.js', // Your entry file
        output: {
            file: 'dist/app.js', // Output file
            format: 'cjs', // CommonJS module format
        },
        plugins: [commonjs(), nodeResolve()],
    }
];