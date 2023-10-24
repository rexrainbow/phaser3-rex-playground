export default PackFolder;

declare namespace PackFolder {
    interface IConfig {
        relatedPathFrom?: string,
        configYamlExtension?: string,
        customLoaderTypes?: string[]
    }
}

declare function PackFolder(
    root: string,
    outFile?: string,
    config?: PackFolder.IConfig
): void;