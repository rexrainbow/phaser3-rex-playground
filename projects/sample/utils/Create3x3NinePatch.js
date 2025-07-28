var Create3x3NinePatch = function (scene, key, config) {
    return scene.rexUI.add.ninePatch({
        key: key,
        columns: [config.left, undefined, config.right],
        rows: [config.top, undefined, config.bottom]
    });
}

export default Create3x3NinePatch;